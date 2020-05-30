var express = require('express');
const passport = require('passport');
var router = express.Router();

const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/auth/google',
    passport.authenticate('google', { 
    scope: ['profile', 'email'] 
  })
);

router.get('/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/',     // redirect user here
    failureRedirect: '/'
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/:googleId/preferences', usersCtrl.showPreferences);

module.exports = router;
