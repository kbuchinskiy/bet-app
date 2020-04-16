import api from './api';

export default {
  async getTotalAmount() {
    const { data } = await api().get('/matchweek/current');
    return data.id;
  },

  async getMatchweekById(id) {
    const { data } = await api().get(`/matchweek/${id}`);
    return data;
  },

  async createMatchweek(matchweek) {
    const { data } = await api().post('/matchweek', matchweek);
    return data;
  },

  async updateMatchweek(matchweek) {
    const { data } = await api().put(`/matchweek/${matchweek.id}`, matchweek);
    return data;
  },

  async getMatch(matchId) {
    const { data } = await api().get(`/matchweek/${matchId.toString().split('_')[0]}`);
    return data.matches.filter((match) => match.id === matchId)[0];
  },
};
