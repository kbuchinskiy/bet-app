import api from './api';

export default {
  async getBets() {
    const { data } = await api().get('/bet/get');
    return data;
  },

  async getPlacedBets(matches) {
    const { data } = await api()
      .get('/bet/get', {
        params: { betsToCheck: matches.map((match) => match.id) },
      });
    return data;
  },

  async clean() {
    return api()
      .get('/bet/clean');
  },

  async add(bets) {
    const { data } = await api().post('/bet/add', bets);
    return data;
  },
};
