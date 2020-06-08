const User = require('../models/user');

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