function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// use req.user object from request to get google id
// and check if they have selected to be a coder and/or a challenger
function hasSelectedUserType(req, res, next) {
    let challengerCheck = req.user.isChallenger;
    let coderCheck = req.user.isCoder;
    if (challengerCheck) res.redirect('/challenges');
    else if (coderCheck) res.redirect('/attempts');
    else res.redirect('/preferences');
}

// checks user's isCoder status and allows related paths
function coderCheck(req, res, next) {
    if (req.user.isCoder) next();
    else res.redirect('preferences');
}

// checks user's isChallenger status and allows related paths
function challengerCheck(req, res, next) {
    if (req.user.isChallenger) next();
    else res.redirect('preferences');
}

module.exports = {
    isLoggedIn,
    hasSelectedUserType,
    coderCheck,
    challengerCheck
}