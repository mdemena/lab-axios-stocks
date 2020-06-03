const express = require('express');
const Stock = require('../models/stock');
const router = express.Router();

router.get('/add', async (req, res, next) => {
	res.render('stock/new');
});
router.get('/:symbolId', (req, res, next) => {
	res.render('stock/show', { symbol: req.params.symbolId });
});
router.post('/:symbolId', async (req, res, next) => {
	await Stock.findByIdAndRemove(req.params.symbolId);
	res.redirect('/');
});
router.post('/', async (req, res, next) => {
	await Stock.create(req.body);
	res.redirect('/');
});
module.exports = router;
