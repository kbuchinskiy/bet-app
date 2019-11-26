import Vue from 'vue';
import Router from 'vue-router';
import Matchweek from './components/Matchweek.vue';
import MatchweekCreate from './components/MatchweekCreate.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Matchweek,
    },
    {
      path: '/matchweek/create',
      name: 'matchweek-create',
      component: MatchweekCreate,
    },
    {
      path: '/matchweek/view',
      name: 'matchweek-view-current',
      component: Matchweek,
    },
    {
      path: '/matchweek/view/:id',
      name: 'matchweek-view',
      component: Matchweek,
    },
  ],
});
