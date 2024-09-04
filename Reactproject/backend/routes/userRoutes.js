const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
  
  const upload = multer({ storage: storage });
  

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);
router.get('/', userController.getAllUsers);
router.put('/:id/avatar', upload.single('avatar'), userController.updateAvatar);
module.exports = router;
