import api from './api';

export default {
  async getBets() {
    return api()
      .get('/bet/get')
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async getPlacedBets(matches) {
    return api()
      .get('/bet/get', {
        params: { betsToCheck: matches.map((match) => match.id) },
      })
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async clean() {
    return api()
      .get('/bet/clean');
  },

  async add(bets) {
    return api()
      .post('/bet/add', bets)
      .then(() => { })
      .catch((e) => console.log(e));
  },
};
