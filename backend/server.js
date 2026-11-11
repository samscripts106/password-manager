//server.js starts the application and listens on a port 

const app = require('./src/app')

app.listen(5001, ()=>{ //starts the server on port 5001
    console.log('Server runnning on port 5001');
});


