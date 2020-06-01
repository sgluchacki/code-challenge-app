const Attempt = require('../models/attempt');


// need to update this to be based on each coder
function getAllAttempts(req, res) {
    Attempt.find({coder: req.user._id})
    .populate({
        path: 'challenge',
        populate: {
            path: 'challenger'
        }
    })                       // figure out this shinola
    .exec(function(err, allAttemptsFromDb) {
        console.log(allAttemptsFromDb , '<=======allAttemptsFromDb')
        res.render('attempts/index', {
            allAttempts: allAttemptsFromDb,
            title: 'All Attempts'
        });
    });
}

function createAttempt(req, res) {
    req.body.coder = req.user;
    req.body.challenge = req.params.challengeID
    console.log(req.body , "<========req.body")
    Attempt.create(req.body, function(err, newAttempt) {
        console.log(err , "<========err")
        console.log(newAttempt , "<========newAttempt")
        res.redirect('/attempts');
    })
}

module.exports = {
    getAllAttempts,
    createAttempt
}