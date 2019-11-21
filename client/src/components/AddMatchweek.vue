<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="matchweekId" label="Matchweek" required></v-text-field>
        </v-col>
      </v-row>
      <v-row  v-for="(match, i) in this.matches" :key="i" justify="center">
        <v-col cols="12" sm="3">
          <v-autocomplete :items="teams" label="Home"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="3">
          <v-autocomplete :items="teams" label="Away"></v-autocomplete>
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
        <v-col cols="12" sm="2">
          <v-btn @click="submit">Create</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      matchweekId: null,
      teams: [],
      matches: [],
    };
  },
  methods: {
    submit() {
      axios
        .post('http://localhost:7113/matchweek/cereate', this.matches);
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.matches.push({
        teams: ['Chelsea', 'Arsenal'],
        odds: [1.33, 4.0, 3.7],
      });
    }

    axios
      .get('http://localhost:7113/matchweek/last')
      .then((res) => {
        this.matchweekId = res.data;
      });
    axios
      .get('http://localhost:7113/teams')
      .then((res) => {
        this.teams = res.data;
      });
  },
};
</script>
