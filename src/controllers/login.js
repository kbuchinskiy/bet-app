import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user';

export default async function (req, res) {
  const user = req.body;

  User
    .findOne({ name: user.name })
    .then((data) => {
      if (data) {
        const token = jwt.sign({ id: user.id }, 'supersecret', {
          expiresIn: 86400, // expires in 24 hours
        });

        const passwordIsValid = bcrypt.compareSync(req.body.password, data.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        res.status(200).send({ auth: true, token, user });
      } else {
        res.status(404).send('No user found.');
      }
    });
}
