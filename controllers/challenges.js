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
    req.body.challenger = req.user._id;
    console.log(req.body , 'req.body')
    Challenge.create(req.body, function(err, newChallenge) {
        res.redirect('/challenges');
    });
}

module.exports = {
    getAllChallenges,
    showNewChallengeForm,
    createNewChallenge
}