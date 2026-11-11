router.post('/register', (req,res)=>{ //defines what happens when a POST req reaches this endpoint 
    res.json({
        message: 'Router route working!'
    });
});

module.exports = {register};