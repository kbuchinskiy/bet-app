/* eslint-disable no-param-reassign */
import Match from '../models/matchweek';

export function create(req, res) {
  const { matchweek } = req.body;

  let matches = req.body;
  matches = matches.map((match, index) => {
    match.id = `${matchweek}_${index + 1}`;
    match.matchweek = matchweek;
    return match;
  });

  Match
    .insertMany(matches)
    .then(() => res.end('added'))
    .catch((e) => res.end(e));
}
export function read(req, res) {
  Match
    .find()
    .then((matches) => {
      res.end(JSON.stringify(matches));
    })
    .catch((e) => {
      console.log(e);
    });
}

export function getLast(req, res) {
  Match
    .find()
    .sort({
      $natural: -1,
    })
    .limit(1)
    .then((matches) => {
      res.end(JSON.stringify(matches[0].matchweek));
    })
    .catch((e) => {
      console.log(e);
    });
}
