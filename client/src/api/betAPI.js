import axios from 'axios';

export default class betAPI {
  static async getBets() {
    return axios
      .get('http://localhost:7113/bet/get')
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async getPlacedBets(matches) {
    return axios
      .get('http://localhost:7113/bet/get', {
        params: { betsToCheck: matches.map((match) => match.id) },
      })

      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
}
