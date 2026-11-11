//contains the function that handles that request
const register = (req, res) => {
    res.json({
        message: 'Register route working!'
    });
};

module.exports = { register };