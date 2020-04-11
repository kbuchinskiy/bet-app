import api from './api';

export default {
  async getTotalAmount() {
    return api()
      .get('/matchweek/amount')
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async getMatchweekById(ID) {
    return api()
      .get('/matchweek/read/', {
        params: { id: ID },
      })
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async createMatchweek(matchweek) {
    return api()
      .post('/matchweek/create', matchweek)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async updateMatchweek(matchweek) {
    return api()
      .post('/matchweek/update', matchweek)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },

  async getMatch(matchID) {
    return api()
      .get('/matchweek/read/', {
        params: { id: matchID.toString().split('_')[0] },
      })
      .then((res) => res.data.matches.filter((match) => match.id === matchID)[0])
      .catch((e) => console.log(e));
  },
};
