/* eslint-disable no-param-reassign */
import Matchweek from '../models/matchweek';

export function update(req, res) {
  const filter = { id: req.body.id };
  const dataToUpdate = { matches: req.body.matches };
  Matchweek
    .findOneAndUpdate(filter, dataToUpdate, {
      new: true,
    })
    .then((updatedItem) => {
      res.send(updatedItem);
    });
}

function getCurrent(res) {
  Matchweek
    .find()
    .sort({ id: -1 })
    .limit(1)
    .then((matchweeks) => {
      res.send(matchweeks[0]);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function create(req, res) {
  const matchweekData = req.body;

  matchweekData.matches = matchweekData.matches.map((match, i) => {
    match.id = `${matchweekData.id}_${i}`;
    return match;
  });

  new Matchweek(matchweekData)
    .save()
    .then(() => res.end('added'))
    .catch((e) => console.log(e));
}

export function getAmount(req, res) {
  Matchweek.countDocuments()
    .then((amount) => {
      res.send(`${amount || 0}`);
    })
    .catch((e) => console.log(e));
}

export function read(req, res) {
  if (req.query.id === 'current') {
    getCurrent(res);
  } else {
    Matchweek
      .findOne({ id: req.query.id })
      .then((matchweek) => {
        if (!matchweek) {
          res.status(404);
        }
        res.send(matchweek);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
