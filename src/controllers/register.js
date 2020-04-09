import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export default function register(req, res) {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 8);

  new User(user)
    .save()
    .then(() => {
      const token = jwt.sign({ id: user.id }, 'supersecret', {
        expiresIn: 86400, // expires in 24 hours
      });
      res.status(200).send({ auth: true, token, user });
    })
    .catch(() => {
      res.status(500).send('There was a problem registering the user.');
    });
}
