// app.js configures Express and defines how requests are handled

const express = require('express');
const authRoutes = require('./routes/authRoutes');
const passwordRoutes = require('./routes/passwordRoutes');

const session = require('express-session');
const { MongoStore } = require('connect-mongo');

const app = express(); //creates an express application

app.use(express.json()); // parse incoming JSON (Middleware)

//Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET, // signs the session cookie
    resave: false, //avoids unnecessarily saving unchanged sessions
    saveUninitialized: false, // doesnt save empty sessions
    store: MongoStore.create({ // stores session in MongoDB
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        httpOnly: true, // prevents JS from reading the cookie
        secure: process.env.NODE_ENV === 'production', // sends cookie only over HTTPs in production
        sameSite: 'lax', // helps protect against CSRF
        maxAge: 1000*60*60*24 // cookie expires after 24hrs
    }
}))

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