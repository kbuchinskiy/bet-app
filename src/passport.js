import passportJwt from 'passport-jwt';
import config from './config';
import User from './models/user';

const JwtStrategy = passportJwt.Strategy;
const { ExtractJwt } = passportJwt;

export default function (passport) {
  passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.auth.jwtSercet,
    }, (async (jwtPayload, done) => {
      try {
        const { _id } = jwtPayload;
        const user = await User.findOne({ _id });
        if (!user) {
          return done(new Error(), false);
        }
        return done(null, user);
      } catch (err) {
        return done(new Error(), false);
      }
    })),
  );
}
