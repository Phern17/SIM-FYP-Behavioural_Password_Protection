const express = require('express');
const { check } = require('express-validator');

const generatorControllers = require('../controllers/generator-controller');

const router = express.Router();

router.get('/', generatorControllers.getDefaultPass);

module.exports = router;