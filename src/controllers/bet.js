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
  console.log(betsToCheck);

  const exisedBets = [];
  if (betsToCheck) {
    await betsToCheck
      .forEach(async (matchId) => {
        await Bet
          .findOne({ matchId })
          .then((bet) => {
            if (bet) {
              exisedBets.push(bet.matchId);
            }
          });
      });

    res.send(exisedBets);
  }
}
