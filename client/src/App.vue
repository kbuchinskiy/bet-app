<template>
  <v-app>
    <v-app-bar app>
      <v-content></v-content>
      <v-toolbar-title>bet-app</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <add-matchweek></add-matchweek>
    </v-content>
  </v-app>
</template>

<script>
// import axios from "axios";
// import BetList from './components/BetList.vue'
import AddMatchweek from "./components/AddMatchweek.vue";

export default {
  name: "app",
  components: {
    // BetList,
    AddMatchweek
  },
  data() {
    return {
      betData: []
    };
  },
  created() {
    // axios.get("http://localhost:7112/odds").then(response => {
    //   this.betData = response.data;
    // });
  }
};
</script>
