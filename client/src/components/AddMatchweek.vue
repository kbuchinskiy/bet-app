<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="betData.matchweekId" label="Matchweek Id" required></v-text-field>
        </v-col>
      </v-row>
      <v-row v-for="(match, i) in 10" :key="i" justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="betData.matches[i].team1" label="Team Home" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="betData.matches[i].team2" label="Team Away" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData.matches[i].w1" label="1" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData.matches[i].x" label="X" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="betData.matches[i].w2" label="2" required></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="3">
          <v-btn @click="submit">Create matchweek</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
const GAMES_AMOUNT = 10;
export default {
  data() {
    return {
      betData: {
        matchweekId: 1,
        matches: []
      }
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:7112/matchweek/create", this.betData)
        .then(res => {
          console.log(res.data);
        });
    }
  },
  created() {
    for (let i = 0; i < GAMES_AMOUNT; i++)
      this.betData.matches.push({
        team1: "Chelsea",
        team2: "Arsenal",
        w1: 1.33,
        x: 4.0,
        w2: 3.7
      });
  }
};
</script>