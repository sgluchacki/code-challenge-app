const express = require('express');
const router = express.Router();

const attemptsCtrl = require('../controllers/attempts');

// required for use of isLoggedIn
const authenticate = require('../middleware/authenticate');

// Routes
// Shows all attempts for a user
router.get('/', attemptsCtrl.getAllAttempts);

// Creates a new attempts
router.post('/challenges/:challengeID/attempts', attemptsCtrl.createAttempt);

module.exports = router;