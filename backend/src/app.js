// app.js configures Express and defines how requests are handled

const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express(); //creates an express application

app.use(express.json()); // Parse incoming JSON

app.use('/api/auth', authRoutes); // Mount authentication routes

app.get('/', (req, res) => { // defines a route that responds to GET reqs
    res.send('PassVault backend is running!');
});

app.post('/api/test', (req, res) => { // registers an endpoint that accepts POST req
    console.log(req.body);

    res.json({
        message: 'Data received successfully!',
        receivedData: req.body
    });
});

module.exports = app;