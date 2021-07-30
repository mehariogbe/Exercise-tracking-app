const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users");



router.get('/', usersCtrl.userIndex);
router.put('/:id', usersCtrl.updateUser);
router.delete('/:id', usersCtrl.deleteUser);

router.get("/:id", usersCtrl.show); 
router.get("/:id/update",usersCtrl.updateIndex);



module.exports = router;