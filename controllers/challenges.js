const Challenge = require('../models/challenge');
const User = require('../models/user');

function getAllChallenges(req, res) {
    // console.log(req.user, '<-----req.user')
    Challenge.find({})
    .populate({path: 'challenger'})  // figure out this shinola
    .exec(function(err, allChallengesFromDb) {
        // console.log(allChallengesFromDb , '<======allChallengesFromDb')
        res.render('challenges/allChallenges', {
            allChallenges: allChallengesFromDb,
            title: 'All Challenges'
        });
    });
}

function getAllChallengesForUser(req, res) {
    // console.log(req.user, '<==== req.user')
    Challenge.find({challenger: req.user._id}, function(err, userChallenges) { // why no work?
        res.render('challenges/index', {
            userChallenges,
            title: 'All of Your Challenges'
        })
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
        // console.log(challenge , '<==============challenge from showOneChallenge')
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
    getAllChallengesForUser,
    showNewChallengeForm,
    createNewChallenge,
    showOneChallenge
}