const Attempt = require('../models/attempt');
const Challenge = require('../models/challenge');


// need to update this to be based on each coder
function getAllAttempts(req, res) {
    Attempt.find({coder: req.user._id})
    .populate({
        path: 'challenge',
        populate: {path: 'challenger'}
    })
    .exec(function(err, allAttemptsFromDb) {
        res.render('attempts/index', {
            allAttempts: allAttemptsFromDb,
            title: `${req.user.displayName}'s Attempts`
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
    Attempt.create(req.body, function(err, newAttempt) {
        res.redirect('/attempts');
    });
}

function showOneAttempt(req, res) {
    Attempt.findById(req.params.attemptID)
        .populate({path: 'challenge'})
        .exec(function(err, attemptFromDb) {
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

// Finds the associated challenge, then ALL attempts on that challenge
// if any solution of that challenge is valid, updates challenge to solved
function updateOneAttempt(req, res) {
    Attempt.findByIdAndUpdate(req.params.attemptID, req.body, {new: true}, function(err, updatedAttemptFromDb) {
        Challenge.findOne({_id: updatedAttemptFromDb.challenge}, function(err, challengeAttempted) {
            Attempt.find({challenge: challengeAttempted._id}, function(err, allAttemptsOfChallenge) {
                challengeAttempted.isSolved = false;    // covers the case of users erroneously selecting correct and backtracking
                for (let i = 0; i < allAttemptsOfChallenge.length; ++i) {
                    if (allAttemptsOfChallenge[i].isCorrect === '1') { 
                        challengeAttempted.isSolved = true;
                    }
                }
                challengeAttempted.save();
            });
        });
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