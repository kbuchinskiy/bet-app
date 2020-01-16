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


export function get(req, res) {
  const { betsToCheck } = req.query;
  console.log(betsToCheck);

  const exisedBets = [];
  if (betsToCheck) {
    betsToCheck
      .slice(0, 1)
      .forEach((matchId) => {
        Bet
          .find({ matchId })
          .then((bet) => {
            exisedBets.push(bet);
            res.send(exisedBets);
          });
      });
  }
}
