import Vue from 'vue';
import VuetifyToast from 'vuetify-toast-snackbar';
import Axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token;
}


new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {

  },
}).$mount('#app');

Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'info',
  iconColor: '', // default
  classes: [
    'body-2',
  ],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeIcon: 'close', // default
  closeColor: '', // default
  slot: [], // default
  shorts: {
    custom: {
      color: 'purple',
    },
  },
  property: '$toast', // default
});
