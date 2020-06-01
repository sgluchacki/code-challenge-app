const Attempt = require('../models/attempt');


// need to update this to be based on each coder
function getAllAttempts(req, res) {
    Attempt.find({coder: req.user._id})
    .populate({path: 'challenge'})  // figure out this shinola
    .exec( function(err, allAttemptsFromDb) {
        res.render('attempts/index', {
            allAttempts: allAttemptsFromDb,
            title: 'All Attempts'
        });
    });
}

function createAttempt(req, res) {
    Attempt.create(req.body, function(err, newAttempt) {
        res.redirect('/attempts');
    })
}

module.exports = {
    getAllAttempts,
    createAttempt
}