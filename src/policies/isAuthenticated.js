import passport from 'passport';

export default function (req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      res.status(403).send({
        error: 'you dont have access',
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
}
