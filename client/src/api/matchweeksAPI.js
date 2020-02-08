import axios from 'axios';

export default class matchweeksAPI {
  static async getTotalAmount() {
    return axios
      .get('http://localhost:7113/matchweek/amount')
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async getMatchweekById(ID) {
    return axios
      .get('http://localhost:7113/matchweek/read/', {
        params: { id: ID },
      })
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async createMatchweek(matchweek) {
    return axios
      .post('http://localhost:7113/matchweek/create', matchweek)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async updateMatchweek(matchweek) {
    return axios
      .post('http://localhost:7113/matchweek/update', matchweek)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async getMatch(matchID) {
    return axios
      .get('http://localhost:7113/matchweek/read/', {
        params: { id: matchID.toString().split('_')[0] },
      })
      .then((res) => res.data.matches.filter((match) => match.id === matchID)[0])
      .catch((e) => console.log(e));
  }
}