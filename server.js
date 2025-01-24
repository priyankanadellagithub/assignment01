const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sheetRoutes = require('./routes/data');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sheets', sheetRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/google-sheets', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
