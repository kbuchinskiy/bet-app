import Vue from 'vue';
import Router from 'vue-router';
import Matchweek from './views/Matchweek.vue';
import MatchweekCreate from './views/MatchweekCreate.vue';
import MatchweekUpdate from './views/MatchweekUpdate.vue';
import BettingRoom from './views/BettingRoom.vue';
import BetArchive from './views/BetArchive.vue';
import Register from './views/Register.vue';
import login from './views/Login.vue';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/matchweekCreate',
      name: 'matchweek-create',
      component: MatchweekCreate,
    },
    {
      path: '/matchweekUpdate',
      name: 'matchweek-update-current',
      component: MatchweekUpdate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/matchweekUpdate/:id',
      name: 'matchweek-update-id',
      component: MatchweekUpdate,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/betArchive',
      name: 'bet-archive',
      component: BetArchive,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        guest: true,
      },
    },
    {
      path: '*',
      redirect: '/matchweek',
      name: 'home',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.isUserLoggedIn) {
      next();
    } else {
      next({
        path: '/login',
        query: { nextUrl: to.fullPath },
      });
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (store.state.isUserLoggedIn) {
      next('bettingRoom');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
