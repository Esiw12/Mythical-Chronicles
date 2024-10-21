require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); 
const sequelize = require('./config/database');
const User = require('./models/User');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


app.use('/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

sequelize.sync();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};


app.post('/register', async (req, res) => {
  const { login, password, email, phone } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ login, password: hashedPassword, email, phone });
    res.status(201).send('Юзер зарегистрирован');
  } catch (error) {
    res.status(400).send(error.message);
  }
});


app.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return res.status(400).send('неправильный логин');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Пароль неверен');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).send('Пользователь не найден');
    }
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put('/profile', [authenticateToken, upload.single('profilePicture')], async (req, res) => {
  const { name, age, email, phone } = req.body;
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).send('Пользователь не найден');
    }

    user.name = name;
    user.age = age;
    user.email = email;
    user.phone = phone;
    if (req.file) {
      user.profilePicture = `/uploads/${req.file.filename}`;
    }

    await user.save();
    res.send('Profile updated');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const clientBuildPath = path.join(__dirname, '../frontend/build');

app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Сервер запущен на порту 3000');
});
