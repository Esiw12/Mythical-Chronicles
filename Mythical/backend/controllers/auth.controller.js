const bcrypt = require('bcryptjs'); //hash
const jwt = require('jsonwebtoken'); // jwt
const { Op } = require("sequelize")
const User = require('../models/user.model'); // Импорт модели
// Функция регистрации нового пользователя
exports.register = async (req, res) => {
  const { name, email, password, confirmPassword, phone } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Пароли не совпадают" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword
    });
    res.status(201).send({ user: { id: user.id, name: user.name, email: user.email, phone: user.phone } });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateProfile = async (req, res) => {
  const { name, age, email, phone } = req.body;
  const userId = req.user.id;  

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "Пользователь не найден" });
    }
    const uniqueCheck = await User.findOne({
      where: {
        [Op.or]: [
          { email: email, id: { [Op.ne]: userId } },
          { phone: phone, id: { [Op.ne]: userId } }
        ]
      }
    });

    if (uniqueCheck) {
      return res.status(400).send({ message: "Email или телефон уже используется другим пользователем" });
    }
    user.name = name !== undefined ? name : user.name;
    user.age = age !== undefined ? age : user.age;
    user.email = email !== undefined ? email : user.email;
    user.phone = phone !== undefined ? phone : user.phone;
    await user.save();

    res.send({ message: "Профиль успешно обновлен", user });
  } catch (error) {
    console.error("Ошибка при обновлении профиля: ", error);
    res.status(500).send({ message: "Внутренняя ошибка сервера" });
  }
};
// Функция для входа в систему
exports.login = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: login }, { name: login }] //можно войти по email/name(user)
      }
    });
    if (!user) {
      return res.status(401).send({ message: "Пользователь не найден" });
    }
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).send({ message: "Неверный пароль" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.send({ token });
  } catch (error) {
    console.error("Ошибка при выполнении входа: ", error);
    res.status(500).send({ message: "Внутренняя ошибка сервера" });
  }
};