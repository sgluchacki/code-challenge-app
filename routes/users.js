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
    successRedirect: '/index',     // redirect user here
    failureRedirect: '/'
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/preferences', usersCtrl.showPreferences);

router.put('/users/:googleId', usersCtrl.updatePreferences);

module.exports = router;
