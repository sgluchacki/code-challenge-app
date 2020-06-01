const Attempt = require('../models/attempt');


// need to update this to be based on each coder
function getAllAttempts(req, res) {
    Attempt.find({}, function(err, allAttemptsFromDb) {
        res.render('attempts/index', {
            allAttempts: allAttemptsFromDb,
            title: 'All Attempts'
        });
    });
}

module.exports = {
    getAllAttempts
}