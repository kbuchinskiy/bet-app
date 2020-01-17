import Bet from '../models/bet';

export function add(req, res) {
  console.log(req.body);
  Bet
    .collection
    .insertMany(...[req.body])
    // .remove({})
    .then(() => res.end('added'))
    .catch((e) => console.log(e));
}


export async function get(req, res) {
  const { betsToCheck } = req.query;
  if (betsToCheck) {
    const placedBetsQueries = betsToCheck
      .map((matchId) => Bet.findOne({ matchId }));

    await Promise.all(placedBetsQueries)
      .then((data) => {
        res.send(data.filter((bet) => bet).map((bet) => bet.matchId));
      });
  }
}