const express = require('express');
const router = express.Router();

const attemptsCtrl = require('../controllers/attempts');

// required for use of isLoggedIn and coderCheck
const authenticate = require('../middleware/authenticate');

// Routes

// Shows all attempts for a user
router.get('/', authenticate.isLoggedIn, authenticate.coderCheck, attemptsCtrl.getAllAttempts);

// Shows form for submitting a new attempt
// Does not follow user-centric RESTful routing (UCRR),
// but needed to reduce clutter 
// and for better navigational flow
router.get('/challenges/:challengeID/new', authenticate.isLoggedIn, authenticate.coderCheck, attemptsCtrl.showNewAttemptForm);

// Shows submitted attempt
// similar to above, these can get big so independent view is necessary
// unauthenticated is okay
router.get('/:attemptID', attemptsCtrl.showOneAttempt);

// Creates a new attempts
// Not RESTful according to UCRR, but greatly improves flow across routers
router.post('/challenges/:challengeID', authenticate.isLoggedIn, authenticate.coderCheck, attemptsCtrl.createAttempt);

// Updates an attempt
// Only used by corresponding challenger
router.put('/:attemptID', authenticate.isLoggedIn, authenticate.challengerCheck, attemptsCtrl.updateOneAttempt);

// Deletes an attempt
router.delete('/:attemptID', authenticate.isLoggedIn, authenticate.coderCheck, attemptsCtrl.deleteOneAttempt);

module.exports = router;