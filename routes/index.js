var express = require('express');
var router = express.Router();

// required for hasSelectedUserType redirector
require('../middleware/authenticate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//confirm this after building views
// Is this a slick solution? It feels like a slick solution.
router.get('/index', hasSelectedUserType);


module.exports = router;
