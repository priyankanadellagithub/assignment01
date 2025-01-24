const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    data: { type: Array, default: [] }, // 2D Array for spreadsheet data
});

module.exports = mongoose.model('Sheet', sheetSchema);
