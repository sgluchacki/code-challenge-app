const express = require('express');
const router = express.Router();

const challengesCtrl = require('../controllers/challenges');

// required for use of isLoggedIn
const authenticate = require('../middleware/authenticate');

// Routes
// Displays all challenges sitewide
router.get('/', challengesCtrl.getAllChallenges);

// Displays new challenge form
router.get('/new', challengesCtrl.showNewChallengeForm);

// Creates new challenge from submitted form
router.post('/', challengesCtrl.createNewChallenge);

module.exports = router;