const express = require('express');
const { getWeather } = require('../controllers/weatherController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getWeather);

module.exports = router;
