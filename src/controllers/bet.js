import Bet from '../models/bet';

function getOutcomeByScore(score) {
  // eslint-disable-next-line no-nested-ternary
  return score[0] > score[1] ? 0 : score[0] < score[1] ? 2 : 1;
}

getOutcomeByScore([1, 2]);

export function add(req, res) {
  Bet
    .collection
    .insertMany(...[req.body])
    // .remove({})
    .then(() => res.end('added'))
    .catch((e) => console.log(e));
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
          console.log(getOutcomeByScore(match.score), itemToUpdate.matchId);
          Bet
            .findOneAndUpdate(
              { matchId: itemToUpdate.matchId },
              { success: getOutcomeByScore(match.score) === itemToUpdate.outcomeBet },
              { new: true },
            )
            .then((data) => {
              console.log(data);
            });
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
