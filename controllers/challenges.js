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

function showOneChallenge(req, res) {
    // find one challenge by params, display corresponding show view
    // pass challenge.title along as title
    // pass challenge along
    // console.log('req ===========>', req , '<======== req')
    // console.log(req.user , '<======== req.user')
    Challenge.findById(req.params.id, function(err, challenge) {
        res.render('challenges/show', {
        title: challenge.title,
        challenge    
        });
    });

    // res.render('challenges/new', {
    //     title: 'Create A New Challenge'
    // });
}

module.exports = {
    getAllChallenges,
    showNewChallengeForm,
    createNewChallenge,
    showOneChallenge
}