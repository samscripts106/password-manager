const express = require('express');

const app = express(); //creates an express application

app.get('/', (req,res)=>{ //defines a route that responds to GET reqs
    res.send('PassVault backend is running!');
});

app.listen(5001, ()=>{ //starts the server on port 5001
    console.log('Server runnning on port 5001');
});