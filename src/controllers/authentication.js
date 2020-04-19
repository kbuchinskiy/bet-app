import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign({ user }, config.auth.jwtSercet, {
    expiresIn: ONE_WEEK,
  });
}

export async function register(req, res) {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 8);

  try {
    await new User(user).save();
    const token = jwtSignUser(user);
    res.status(200).send({ auth: true, token, user });
  } catch (err) {
    console.log(err);
    res.status(400).send('There was a problem registering the user.');
  }
}

export async function login(req, res) {
  try {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email, name });


    if (!user) {
      return res.status(403).send({
        error: 'Login information was incorect',
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).send({
        error: 'Login information was incorect',
      });
    }

    // const token = jwt.sign({ id: user.id }, 'supersecret', {
    //   expiresIn: 3000, // expires in 24 hours
    // });

    const token = jwtSignUser(user);

    return res.status(200).send({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(403).send({
      error: 'An error has occured trying to log in',
    });
  }
}
