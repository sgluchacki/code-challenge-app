const express = require('express');
const router = express.Router();

const challengesCtrl = require('../controllers/challenges');

// required for use of isLoggedIn
require('../middleware/authenticate');

// Routes


module.exports = router;