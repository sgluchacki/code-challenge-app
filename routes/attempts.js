const express = require('express');
const router = express.Router();

const attemptsCtrl = require('../controllers/attempts');

// required for use of isLoggedIn
const authenticate = require('../middleware/authenticate');

// Routes
router.get('/', attemptsCtrl.getAllAttempts);

module.exports = router;