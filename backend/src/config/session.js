const session = require('express-session');
const { MongoStore } = require('connect-mongo');

//Session Middleware: 
const sessionMiddleware = session({
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
});

module.exports = sessionMiddleware;