import api from './api';

export default {
  async getBets() {
    const { data } = await api().get('/bets');
    return data;
  },

  async getPlacedBets(userId, matches) {
    const { data } = await api()
      .get('/bets', {
        params: {
          betsToCheck: matches.map((match) => (match.id)),
          userId,
        },
      });
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
