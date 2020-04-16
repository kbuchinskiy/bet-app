<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link @click="drawer = false" to="/matchweekCreate">
          <v-list-item-content>
            <v-list-item-title>Add Matchweek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/matchweekUpdate">
          <v-list-item-content>
            <v-list-item-title>Update Matchweek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/matchweek">
          <v-list-item-content>
            <v-list-item-title>Matchweek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/bettingRoom">
          <v-list-item-content>
            <v-list-item-title>Betting Room</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/betArchive">
          <v-list-item-content>
            <v-list-item-title>Bet Archive</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>bet-app</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="isLoggedIn" @click="logout" class="ml-auto">Logout</v-btn>
        <v-btn v-if="!isLoggedIn" to="/login">Sign In</v-btn>
        <v-btn v-if="!isLoggedIn" to="/register" class="mx-2">Sign Up</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isUserLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push('/');
    },
  },
  created() {
    this.$http.interceptors.response.use(
      undefined,
      (err) => new Promise(() => {
        // eslint-disable-next-line no-underscore-dangle
        if (
          err.status === 401
            && err.config
            // eslint-disable-next-line no-underscore-dangle
            && !err.config.__isRetryRequest
        ) {
          this.$store.dispatch('logout');
        }
        throw err;
      }),
    );
  },
};
</script>
