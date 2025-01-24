const express = require('express');
const Sheet = require('../models/sheet');

const router = express.Router();

// Get all sheets
router.get('/', async (req, res) => {
    const sheets = await Sheet.find();
    res.json(sheets);
});

// Save a sheet
router.post('/', async (req, res) => {
    const { name, data } = req.body;
    const sheet = new Sheet({ name, data });
    await sheet.save();
    res.status(201).json(sheet);
});

module.exports = router;
