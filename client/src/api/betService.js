import api from './api';

export default {
  async getBets() {
    const { data } = await api().get('/bets');
    return data;
  },

  async getPlacedBets(matches) {
    const { data } = await api()
      .get('/bets', {
        params: {
          betsToCheck: matches.map((match) => (match.id)),
        },
      });
    console.log(matches.map((match) => (match.id)));
    return data;
  },

  async clean() {
    return api().get('/bet/clean');
  },

  async add(bets) {
    const { data } = await api().post('/bet', bets);
    return data;
  },
};
