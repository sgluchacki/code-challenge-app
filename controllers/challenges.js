const Challenge = require('../models/challenge');

function getAllChallenges(req, res) {
    console.log(req.user, '<-----req.user')
    Challenge.find({}, function(err, allChallengesFromDb) {
        res.render('challenges/index', {
            allChallenges: allChallengesFromDb,
            title: 'All Challenges'
        });
    });
}

function showNewChallengeForm(req, res) {
    res.render('challenges/new', {
        title: 'Create A New Challenge'
    });
}

function createNewChallenge(req, res) {
    Challenge.create(req.body, function(err, newChallenge) {
        newChallenge.challenger = user._id;
        res.redirect('/challenges');
    });
}

module.exports = {
    getAllChallenges,
    showNewChallengeForm,
    createNewChallenge
}