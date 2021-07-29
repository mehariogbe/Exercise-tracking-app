const express = require('express');
const router = express.Router();

const exerciseCtrl = require('../controllers/exercises');

router.get('/users/:id/exercises/new', exerciseCtrl.new);

module.exports = router;