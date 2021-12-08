//custom middleware
function requiresLogin(req, res, next) {
    if (req.session["User"]) {
        return next()
    } else {
        res.redirect('/login')
    }
}

module.exports = { requiresLogin }