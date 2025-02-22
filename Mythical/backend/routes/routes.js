const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/update-profile', authMiddleware, updateProfile);
module.exports = router;
