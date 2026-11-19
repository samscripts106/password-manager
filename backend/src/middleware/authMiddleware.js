// Checks whether the user is authenticated
const requireAuth =  (req, res, next) => {
    if(!req.session.userId){ //checks whether a logged-in user's ID exists in the session
        return res.status(401).json({
            message: 'Not authenticated'
        });
    }
    next(); //allows authenticated reqs to proceed to the controller
}

module.exports = requireAuth;