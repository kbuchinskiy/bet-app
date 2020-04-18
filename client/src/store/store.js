import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState(),
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },


  mutations: {
    set_token(state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    set_user(state, user) {
      state.user = user;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('set_token', token);
    },
    setUser({ commit }, user) {
      commit('set_user', user);
    },
  },

});
