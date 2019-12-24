import Vue from 'vue';
import Router from 'vue-router';
import Matchweek from './views/Matchweek.vue';
import MatchweekCreate from './views/MatchweekCreate.vue';
import BettingRoom from './views/BettingRoom.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'matchweek',
      name: 'home',
    },
    {
      path: '/createMatchweek',
      name: 'create-matchweek',
      component: MatchweekCreate,
    },
    {
      path: '/matchweek',
      name: 'matchweek-view-current',
      component: Matchweek,
    },
    {
      path: '/matchweek/:id',
      name: 'matchweek-view-id',
      component: Matchweek,
    },
    {
      path: '/bettingRoom',
      name: 'beeting-roo,',
      component: BettingRoom,
    },
  ],
});
