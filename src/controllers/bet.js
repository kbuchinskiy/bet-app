import Bet from '../models/bet';

function getOutcomeByScore(score) {
  // eslint-disable-next-line no-nested-ternary
  return score[0] > score[1] ? 0 : score[0] < score[1] ? 2 : 1;
}

export async function add(req, res) {
  try {
    const bets = await Bet.collection.insertMany(...[req.body]);
    res.send(bets);
  } catch (err) {
    res.status(403).send({
      error: 'An error has occured trying to log in',
    });
  }
}


export function clean(req, res) {
  Bet
    .collection
    .deleteMany({})
    .then(() => res.end('cleaned'))
    .catch((e) => console.log(e));
}

export function setOutcomeBet(mathcesCompleted) {
  mathcesCompleted.forEach((match) => {
    Bet.findOne({ matchId: match.id })
      .then((itemToUpdate) => {
        if (itemToUpdate) {
          Bet
            .findOneAndUpdate(
              { matchId: itemToUpdate.matchId },
              { success: getOutcomeByScore(match.score) === itemToUpdate.outcomeBet },
              { new: true },
            );
        }
      });
  });
}

export async function get(req, res) {
  const { betsToCheck } = req.query;

  if (betsToCheck) {
    const placedBetsQueries = betsToCheck
      .map((matchId) => Bet.findOne({ matchId }));

    await Promise.all(placedBetsQueries)
      .then((data) => {
        res.send(data.filter((bet) => bet));
      });
  } else {
    await Bet.find().then((data) => {
      res.send(data);
    });
  }
}
