const passport = require('passport');

module.exports = (app) => {
  // exporting a function from this file
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'], // specific google scopes
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
