const express = require('express');
const router = express.Router();

const attemptsCtrl = require('../controllers/attempts');

// required for use of isLoggedIn
const authenticate = require('../middleware/authenticate');

// Routes
// Shows all attempts for a user
router.get('/', attemptsCtrl.getAllAttempts);

// Shows form for submitting a new attempt
// Does not follow user-centric RESTful routing (UCRR),
// but needed to reduce clutter 
// and for better navigational flow
router.get('/challenges/:challengeID/new', attemptsCtrl.showNewAttemptForm)

// Creates a new attempts
// Not RESTful according to UCRR, but greatly improves flow across routers
router.post('/challenges/:challengeID', attemptsCtrl.createAttempt);

module.exports = router;