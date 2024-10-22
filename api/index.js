const express = require('express');
const app = express();

app.get('/api/random-number', (req, res) => {
    const min = 44552518;
    const max = 44553518;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({ randomNumber });
});

module.exports = app;