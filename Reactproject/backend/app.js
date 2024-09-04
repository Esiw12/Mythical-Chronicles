const express = require('express');
const multer = require('multer');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
app.use(express.json()); 
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/') // Убедитесь, что этот путь существует в вашем проекте
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  });
  
  const upload = multer({ storage: storage });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
