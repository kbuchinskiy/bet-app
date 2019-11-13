<template>
  <v-container>
    <v-form>
      <v-row v-for="(match, i) in 10" :key="i">
        <v-col cols="12" sm="2">
          <v-text-field v-model="betData[i].team1" label="Team Home" value="Chelsea" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="betData[i].team2" label="Team Away" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData[i].w1" label="1" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData[i].x" label="X" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData[i].w2" label="2" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="submit">Add</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
const GAMES_AMOUNT = 10;
export default {
  data() {
    return {
      betData: []
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:7112/matchday/create", this.betData)
        .then(res => {
          console.log(res.data);
        });
    }
  },
  created() {
    for (let i = 0; i < GAMES_AMOUNT; i++)
      this.betData.push({
        team1: "Chelsea",
        team2: "Arsenal",
        w1: 1.33,
        x: 4.0,
        w2: 3.7
      });
  }
};
</script>