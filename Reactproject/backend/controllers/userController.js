const { User, Log, Reg } = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const generateToken = (userId) => {
  const secretKey = process.env.SECRET_KEY || 'default_secret_key';
  const expiresIn = '1h'; 

  return jwt.sign({ userId }, secretKey, { expiresIn });
};

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, email, password: hashedPassword });
  
      const token = generateToken(newUser.id);
  
   
      const userResponse = newUser.toJSON();
      delete userResponse.password;
  
      res.status(201).json({ user: userResponse, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  };
  
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user && bcrypt.compare(password, user.password)) {
      
      const token = generateToken(user.id);
      res.json({ userId: user.id, token });
    } else {
      res.status(401).json({ error: "Неверные учетные данные" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    
    await User.destroy({ where: { id: userId } });

    res.status(200).json({ message: 'Пользователь успешно удален' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };
  
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email, password, name } = req.body;

  try {
    
    await User.update(
      { username, email, password, name },
      { where: { id: userId } }
    );

    res.status(200).json({ message: 'Данные пользователя успешно обновлены' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
   
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.updateAvatar = async (req, res) => {
  const userId = req.params.id;
  const avatarFile = req.file;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    user.avatar = avatarFile.path; // Предполагается, что путь к файлу сохранен в поле `path` объекта `avatarFile`
    await user.save(); // Сохраняем изменения в базе данных

    res.status(200).json({ message: 'Аватар обновлен', user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};