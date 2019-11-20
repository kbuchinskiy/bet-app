<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="matchweekId" label="Matchweek" required></v-text-field>
        </v-col>
      </v-row>
      <v-row v-for="(match, i) in 10" :key="i" justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="matches[i].teams[0]" label="Home" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field v-model="matches[i].teams[1]" label="Away" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="matches[i].odds[0]" label="1" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="matches[i].odds[1]" label="X" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="matches[i].odds[2]" label="2" required></v-text-field>
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
      matchweekId: null,
      matches: []
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:7112/matchweek/create", this.matches)
        .then(res => console.log(res.data));
    }
  },
  created() {
    axios.get("http://localhost:7112/matchweek/last").then(res => {
      this.matchweekId = res.data;
    });

    for (let i = 0; i < GAMES_AMOUNT; i++)
      this.matches.push({
        teams: ["Chelsea", "Arsenal"],
        odds: [1.33, 4.0, 3.7]
      });
  }
};
</script>