import axios from 'axios';
import SERVER_URL from './conf';

export default class betAPI {
  static async getBets() {
    return axios
      .get(`${SERVER_URL}/bet/get`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async getPlacedBets(matches) {
    return axios
      .get(`${SERVER_URL}/bet/get`, {
        params: { betsToCheck: matches.map((match) => match.id) },
      })

      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  static async clean() {
    return axios
      .get(`${SERVER_URL}/bet/clean`);
  }

  static async add(bets) {
    return axios
      .post(`${SERVER_URL}/bet/add`, bets)
      .then(() => { })
      .catch((e) => console.log(e));
  }
}
