import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import SERVER_URL from '../api/conf';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    login({ commit }, userData) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        Axios
          .post(`${SERVER_URL}/login`, userData)
          .then((resp) => {
            const { token } = resp.data;
            const { user } = resp.data;
            localStorage.setItem('token', token);
            // Axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    register({ commit }, userData) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        Axios
          .post(`${SERVER_URL}/register`, userData)
          .then((resp) => {
            const { token } = resp.data;
            const { user } = resp.data;
            localStorage.setItem('token', token);
            // Axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err.response.data.error);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete Axios.defaults.headers.common.Authorization;
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
