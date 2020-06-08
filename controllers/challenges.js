const Challenge = require('../models/challenge');
const Attempt = require('../models/attempt');

function getAllChallenges(req, res) {
    Challenge.find({})
    .populate({path: 'challenger'})
    .exec(function(err, allChallengesFromDb) {
        res.render('challenges/allChallenges', {
            allChallenges: allChallengesFromDb,
            title: 'All Challenges'
        });
    });
}

function getAllChallengesForUser(req, res) {
    Challenge.find({challenger: req.user._id}, function(err, userChallenges) {
        res.render('challenges/index', {
            userChallenges,
            title: `${req.user.displayName}'s Challenges`
        });
    });
}

function showNewChallengeForm(req, res) {
    res.render('challenges/new', {
        title: 'Create A New Challenge'
    });
}

function createNewChallenge(req, res) {
    req.body.challenger = req.user._id;
    Challenge.create(req.body, function(err, newChallenge) {
        res.redirect('/challenges');
    });
}

// shows one challenge and passes all associated info along to the view
// by nature of the construction of challenge model we need to populate  
// both the attempts of the challenge and the users of each attempt
function showOneChallenge(req, res) {
    Challenge.findById(req.params.id)
        .populate({path: 'challenger'})
        .exec(function(err, challenge) {
            Attempt.find({challenge: challenge._id})
            .populate({path: 'coder'})
            .exec(function(err, attemptsFromDb) {
                res.render('challenges/show', {
                title: challenge.title,
                challenge,
                attemptsOfThisChallenge: attemptsFromDb
                });
            }
        );
    });
}

module.exports = {
    getAllChallenges,
    getAllChallengesForUser,
    showNewChallengeForm,
    createNewChallenge,
    showOneChallenge
}