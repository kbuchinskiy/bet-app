/* eslint-disable no-param-reassign */
import Matchweek from '../models/matchweek';
import { setOutcomeBet } from './bet';

export async function put(req, res) {
  const filter = { id: req.body.id };
  const dataToUpdate = { matches: req.body.matches };
  const matchweek = await Matchweek
    .findOneAndUpdate(filter, dataToUpdate, { new: true });

  res.send(matchweek);

  const mathcesCompleted = req.body.matches
    .filter((match) => match.score.length);

  setOutcomeBet(mathcesCompleted);
}

async function getCurrent() {
  const matchweeks = await Matchweek
    .find()
    .sort({ id: -1 })
    .limit(1);

  return matchweeks[0];
}

export async function post(req, res) {
  const matchweekData = req.body;

  matchweekData.matches = matchweekData.matches.map((match, i) => {
    match.id = `${matchweekData.id}_${i}`;
    return match;
  });

  try {
    const matchweek = await new Matchweek(matchweekData).save();
    res.send(matchweek);
  } catch (err) {
    res.status(500).send({
      error: 'an error has occured trying to add matchweek',
    });
  }
}

export async function getAmount(req, res) {
  const amount = await Matchweek.countDocuments();
  res.send(`${amount || 0}`);
}

export async function getMatchweekById(req, res) {
  try {
    const { id } = req.params;
    const matchweek = (id === 'current')
      ? await getCurrent()
      : await Matchweek.findOne({ id });
    res.send(matchweek);
  } catch (err) {
    res.status(500).send({
      error: 'an error has occured trying to get matchweek',
    });
  }
}
