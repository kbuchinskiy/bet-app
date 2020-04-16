import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
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
