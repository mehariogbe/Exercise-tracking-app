const express = require('express');
const router = express.Router();

const exerciseCtrl = require('../controllers/exercises');

router.get('/users/:id/exercises/new', exerciseCtrl.new);
router.get('/users/:id/exercises/index', exerciseCtrl.show);
router.post('/exercises/:id', exerciseCtrl.create);


module.exports = router;