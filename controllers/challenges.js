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


module.exports = {
    getAllChallenges
}