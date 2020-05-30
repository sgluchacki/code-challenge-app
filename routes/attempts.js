const express = require('express');
const router = express.Router();

// required for use of isLoggedIn
require('../middleware/authenticate');

const attemptsCtrl = require('../controllers/attempts');

router.get('/', attemptsCtrl.getAllAttempts);

module.exports = router;