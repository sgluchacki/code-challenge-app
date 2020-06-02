const express = require('express');
const router = express.Router();

const challengesCtrl = require('../controllers/challenges');

// required for use of isLoggedIn and challengerCheck
const authenticate = require('../middleware/authenticate');

// Routes

// Displays all challenges for the logged-in user
router.get('/', authenticate.isLoggedIn, authenticate.challengerCheck, challengesCtrl.getAllChallengesForUser);

// Displays all challenges sitewide
// unauthenticated is okay
router.get('/all', challengesCtrl.getAllChallenges);

// Displays new challenge form
router.get('/new', authenticate.isLoggedIn, authenticate.challengerCheck, challengesCtrl.showNewChallengeForm);

// Displays one challenge
// unauthenticated is okay
router.get('/:id', challengesCtrl.showOneChallenge);

// Creates new challenge from submitted form
router.post('/', authenticate.isLoggedIn, authenticate.challengerCheck, challengesCtrl.createNewChallenge);

module.exports = router;