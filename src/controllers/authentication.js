import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export async function register(req, res) {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 8);

  try {
    await new User(user).save();
    const token = jwt.sign({ id: user.id }, 'supersecret', {
      expiresIn: 3000, // expires in 24 hours
    });
    res.status(200).send({ auth: true, token, user });
  } catch (err) {
    console.log(err);
    res.status(400).send('There was a problem registering the user.');
  }
}

export function login() {

}
