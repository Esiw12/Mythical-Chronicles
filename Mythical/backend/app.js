const express = require('express');
require('dotenv').config();
const sequelize = require('./config/sequelize');
const authRoutes = require('./routes/routes');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'  
}));
app.use(express.json());
app.use('/api', authRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен на порту ${process.env.PORT}`);
  });
});
