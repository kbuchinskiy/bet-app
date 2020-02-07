<template>
  <v-container>
    <v-form>
      <v-row justify="center">
        <v-col cols="12" sm="2">
          <v-text-field v-model="matchweek.id" label="Matchweek" required></v-text-field>
        </v-col>
      </v-row>
      <v-row  v-for="(match, i) in this.matchweek.matches" :key="i" justify="center">
        <v-col cols="12" sm="3">
          <v-autocomplete v-model="match.teams[0]" :items="teams" label="Home"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="3">
          <v-autocomplete v-model="match.teams[1]" :items="teams" label="Away"></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="match.odds[0]" label="1" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="match.odds[1]" label="X" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field v-model="match.odds[2]" label="2" required></v-text-field>
        </v-col>
        <v-col cols="12 d-flex" sm="1">
          <v-text-field
            v-model="match.score[0]"></v-text-field>
          <v-text-field
            v-model="match.score[1]"></v-text-field>
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
import matchweeksAPI from '../api/matchweeksAPI';

export default {
  name: 'matchweek-create',
  data() {
    return {
      teams: [],
      matchweek: {
        id: null,
        matches: [],
      },
    };
  },
  methods: {
    submit() {
      matchweeksAPI
        .createMatchweek(this.matchweek)
        .then(() => {
          this.matchweek.id += 1;
        });
    },
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.matchweek.matches.push({
        teams: ['New Castle', 'Wolves'],
        odds: [1.33, 4.0, 3.7],
        score: [0, 2],
      });
    }

    axios
      .get('http://localhost:7113/teams')
      .then((res) => {
        this.teams = res.data;
      });

    matchweeksAPI
      .getMatchweekById('current')
      .then((matchweek) => {
        console.log(matchweek);
        this.matchweek.id = matchweek ? matchweek.id + 1 : 1;
      });
  },
};
</script>
