const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users");


router.get('new', usersCtrl.newUser);
router.get('/', usersCtrl.userIndex);
router.post('/', usersCtrl.create);


module.exports = router;