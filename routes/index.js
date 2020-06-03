const express = require('express');
const Stock = require('../models/stock');
const router = express.Router();

router.get('/', async (req, res, next) => {
	const stocks = await Stock.find();
	res.render('index', { stocks });
});

module.exports = router;
