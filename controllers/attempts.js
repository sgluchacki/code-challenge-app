const Attempt = require('../models/attempt');
const Challenge = require('../models/challenge');


// need to update this to be based on each coder
function getAllAttempts(req, res) {
    Attempt.find({coder: req.user._id})
    .populate({
        path: 'challenge',
        populate: {path: 'challenger'}
    })                       // figure out this shinola
    .exec(function(err, allAttemptsFromDb) {
        // console.log(allAttemptsFromDb[0].challenge.challenger , '<=======allAttemptsFromDb[0].challenge.challenger')
        // console.log(req.user , '<=======req.user')
        res.render('attempts/index', {
            allAttempts: allAttemptsFromDb,
            title: 'All Attempts'
        });
    });
}

function showNewAttemptForm(req, res) {
    Challenge.findById(req.params.challengeID, function(err, challengeFromDb) {
        res.render('attempts/new', {
            title: `Attempt "${challengeFromDb.title}"`,
            challenge: challengeFromDb
        });

    });

}

function createAttempt(req, res) {
    req.body.coder = req.user;
    req.body.challenge = req.params.challengeID
    // console.log(req.body , "<========req.body")
    Attempt.create(req.body, function(err, newAttempt) {
        // console.log(err , "<========err")
        // console.log(newAttempt , "<========newAttempt")
        res.redirect('/attempts');
    });
}

function showOneAttempt(req, res) {
    Attempt.findById(req.params.attemptID)
        .populate({path: 'challenge'})
        .exec(function(err, attemptFromDb) {
            console.log(attemptFromDb , '<======attemptFromDb')
            res.render('attempts/show', {
                title: `Details of "${attemptFromDb.brief}"`,
                attempt: attemptFromDb
            });
    });
}

function deleteOneAttempt(req, res) {
    Attempt.findByIdAndRemove(req.params.attemptID, function(err) {
        res.redirect('/attempts');
    })
}

function updateOneAttempt(req, res) {
    Attempt.findByIdAndUpdate(req.params.attemptID, req.body, {new: true}, function(err, updatedAttemptFromDb) {
        res.redirect(`/attempts/${updatedAttemptFromDb._id}`);
    });
}

module.exports = {
    getAllAttempts,
    showNewAttemptForm,
    createAttempt,
    showOneAttempt,
    deleteOneAttempt,
    updateOneAttempt
}