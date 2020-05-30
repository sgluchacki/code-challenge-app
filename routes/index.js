var express = require('express');
var router = express.Router();

const challengesCtrl = require('../controllers/challenges');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Displays unauthenticated view of challenges
router.get('/', challengesCtrl.getAllChallenges);

module.exports = router;
