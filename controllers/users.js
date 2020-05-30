const User = require('../models/user');

function showPreferences(req, res) {
    User.find()
    res.render('users/preferences', {
        title: 'Preferences'
    });
}

// Here I'll need to update the user profile
// Also will need to send update form

module.exports = {
    showPreferences
}