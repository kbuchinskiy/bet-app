import Vue from 'vue'
import Router from 'vue-router'
import Matchweek from "./components/Matchweek.vue";
import AddMatchweek from "./components/AddMatchweek.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    component: Matchweek
  },
  {
    path: "/matchweek/add",
    component: AddMatchweek
  }]
})