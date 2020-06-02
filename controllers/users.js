const User = require('../models/user');

// According to Jim/Gabe thread this is a security flaw. Why????????
// Is this a cookie thing?????
// If it's part of req.user, isn't this just pulled from the db???????
// regardless, should update because User.findById(req.user._id === req.user
function showPreferences(req, res) {
    res.render('users/preferences', {
        title: 'Preferences'
    });
}


function updatePreferences(req, res) {
    User.findByIdAndUpdate(req.user._id, req.body, {new: true}, function(err, updatedUser) {
        res.redirect('/index');
    });
}

module.exports = {
    showPreferences,
    updatePreferences
}