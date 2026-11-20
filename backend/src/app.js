// app.js configures Express and defines how requests are handled
const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
const sessionMiddleware = require('./config/session');

const app = express(); //creates an express application
app.use(cors({
    origin: 'http://localhost:5173', // This tells the backend that only allow browser reqs from our React frontend running at this origin
    credentials: true //allows the backend to support credentialed cross-origin reqs
}));

app.use(express.json()); // parse incoming JSON (Middleware)
app.use(sessionMiddleware); //allows your Express server to remember a user across multiple HTTP requests through session cookies
app.use('/api/auth', authRoutes); // Mount authentication routes
app.use('/api/passwords', passwordRoutes) // Mount password routes 

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