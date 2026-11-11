//app.js configures Express and defines how req are handled 

const express = require('express');

const app = express(); //creates an express application

const authRoutes = require('./routes/authRoutes'); //mounts the application router under /api/auth

app.use('/api/auth', authRoutes);

app.use(express.json()); //express.json() is built-in express middleware that parses incoming JSON

app.get('/', (req,res)=>{ //defines a route that responds to GET reqs
    res.send('PassVault backend is running!');
});

app.post('/api/test', (req,res)=>{ //registers an endpoint that accepts POST req
    console.log(req.body); //req.json contains the parsed JSON sent by the frontend

    res.json({ //sends a JSON response back
        message: 'Data received successfully!',
        receivedData: req.body
    });
});

module.exports = app;