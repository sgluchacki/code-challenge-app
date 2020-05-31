const User = require('../models/user');

function showPreferences(req, res) {
    User.findById(req.user._id, function(err, userFromDb) {
        res.render('users/preferences', {
            title: 'Preferences',
            user: userFromDb
        });
    });
}

function updatePreferences(req, res) {
    User.findByIdAndUpdate(req.user._id, req.body, {new: true}, function(err, updatedUser) {
        res.redirect('/index');
    });
}

// Here I'll need to update the user profile
// Also will need to send update form

module.exports = {
    showPreferences,
    updatePreferences
}