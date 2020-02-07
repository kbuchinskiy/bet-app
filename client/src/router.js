import Vue from 'vue';
import Router from 'vue-router';
import Matchweek from './views/Matchweek.vue';
import MatchweekCreate from './views/MatchweekCreate.vue';
import MatchweekUpdate from './views/MatchweekUpdate.vue';
import BettingRoom from './views/BettingRoom.vue';
import NotFound from './views/NotFound.vue';
import BetArchive from './views/BetArchive.vue';

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
      path: '/matchweekCreate',
      name: 'matchweek-create',
      component: MatchweekCreate,
    },
    {
      path: '/matchweekUpdate',
      name: 'matchweek-update-current',
      component: MatchweekUpdate,
    },
    {
      path: '/matchweekUpdate/:id',
      name: 'matchweek-update-id',
      component: MatchweekUpdate,
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
      name: 'beeting-room',
      component: BettingRoom,
    },
    {
      path: '/betArchive',
      name: 'bet-archive',
      component: BetArchive,
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});
