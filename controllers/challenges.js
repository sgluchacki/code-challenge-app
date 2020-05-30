const Challenge = require('../models/challenge');

function getAllChallenges(req, res) {
    Challenge.find({}, function(err, allChallengesFromDb) {
        res.render('challenges/index', {
            allChallenges: allChallengesFromDb,
            title: 'All Challenges'
        });
    });
}


module.exports = {
    getAllChallenges
}