<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link @click="drawer = false" to="/createMatchweek">
          <v-list-item-content>
            <v-list-item-title>Add Matchweek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/">
          <v-list-item-content>
            <v-list-item-title>Matchweek</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = false" to="/bettingRoom">
          <v-list-item-content>
            <v-list-item-title>Betting Room</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>bet-app</v-toolbar-title>
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
};
</script>
