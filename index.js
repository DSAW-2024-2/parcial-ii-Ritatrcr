// server.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');


dotenv.config();

const app = express();
app.use(express.json());

app.use('/login', authRoutes);
app.use('/weather', weatherRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running in the port${PORT}`);
});
