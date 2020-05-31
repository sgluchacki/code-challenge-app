const express = require('express');
const router = express.Router();

const challengesCtrl = require('../controllers/challenges');

// required for use of isLoggedIn
const authenticate = require('../middleware/authenticate');

// Routes
router.get('/', challengesCtrl.getAllChallenges);

module.exports = router;