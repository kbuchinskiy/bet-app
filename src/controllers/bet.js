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

export function setOutcomeBet(matchesFinished) {
  matchesFinished.forEach(async (match) => {
    const betToUpdate = await Bet.findOne({ matchId: match.id });
    if (betToUpdate) {
      await Bet.findOneAndUpdate(
        { matchId: betToUpdate.matchId },
        { success: getOutcomeByScore(match.score) === betToUpdate.outcomeBet },
        { new: true },
      );
    }
  });
}

export async function get(req, res) {
  const { betsToCheck, userId } = req.query;

  if (betsToCheck) {
    const placedBetsQueries = betsToCheck.map((matchId) => Bet.findOne({ userId, matchId }));
    const placedBets = await Promise.all(placedBetsQueries);
    res.send(placedBets.filter((bet) => bet));
  } else {
    const bets = await Bet.find({ userId });
    res.send(bets);
  }
}
