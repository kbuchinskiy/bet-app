<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>bet-app</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <bet-list :bet-data="betData">

      </bet-list>
    </v-content>
  </v-app>
</template>

<script>
    import axios from "axios"
    import BetList from './components/BetList.vue'

    export default {
        name: 'app',
        components: {
            BetList
        },
        data() {
            return {
                betData: []
            }
        },
        created() {
            axios.get("http://localhost:7112/odds").then(response => {
                this.betData = response.data;
            })
        }
    }
</script>
