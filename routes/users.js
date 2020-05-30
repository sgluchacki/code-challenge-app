var express = require('express');
const passport = require('passport');
var router = express.Router();

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

module.exports = router;
