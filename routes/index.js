const express = require('express');
const router = express.Router();

// required for hasSelectedUserType redirector
const authenticate = require('../middleware/authenticate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UnStuck.' });
});


// Is this a slick solution? It feels like a slick solution.
router.get('/index', authenticate.hasSelectedUserType);


module.exports = router;
