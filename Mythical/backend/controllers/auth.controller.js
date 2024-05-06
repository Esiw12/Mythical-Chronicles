const bcrypt = require('bcryptjs'); //hash
const jwt = require('jsonwebtoken'); // jwt
const User = require('../models/user.model'); // Импорт модели
// Функция регистрации нового пользователя
exports.register = async (req, res) => {
  const { name, email, password } = req.body; // Извлечение данных из запроса
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // hash пароля
    const user = await User.create({ // new user
      name,
      email, 
      password: hashedPassword
    });
    res.status(201).send({ user: { id: user.id, name: user.name, email: user.email } }); //данные отправка
  } catch (error) {
    res.status(500).send(error); // Обработка ошибок
  }
};
// Функция для входа в систему
exports.login = async (req, res) => {
  const { email, password } = req.body; // Извлечение данных из запроса
  try {
    const user = await User.findOne({ where: { email } }); // Поиск пользователя по email
    if (!user || !await bcrypt.compare(password, user.password)) { // Проверка пароля
      return res.status(401).send({ message: "Ошибка авторизации" }); 
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' }); // Создание JWT
    res.send({ token }); // Отправка токена пользователю
  } catch (error) {
    res.status(500).send(error); // Обработка ошибок
  }
};
