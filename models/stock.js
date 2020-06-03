const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
	symbol: String,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
