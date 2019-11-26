import Vue from 'vue';
import Vuex from 'vuex';
import matchweeksAPI from '../api/matchweeks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastMatchweek: {
      matches: [],
      id: 1,
    },
    matchweeksAmount: 1,
  },
  mutations: {
    SET_LAST_MATCHWEEK(state, payload) {
      state.lastMatchweek = payload;
    },
    SET_MATCHWEEKS_AMOUNT(state, payload) {
      state.matchweeksAmount = payload;
    },
  },
  actions: {
    async setLastMatchweek({ commit }, id) {
      const lastMatchweek = await matchweeksAPI.getMatchweekById(id);
      commit('SET_LAST_MATCHWEEK', lastMatchweek);
    },
    async setMatchweeksAmount({ commit }) {
      const matchdaysAmount = await matchweeksAPI.getTotalAmount();
      commit('SET_MATCHWEEKS_AMOUNT', matchdaysAmount);
    },
    initStore() {
      this.dispatch('setLastMatchweek', 'current');
      this.dispatch('setMatchweeksAmount');
    },
  },
});
