<template>
  <v-container>
    <v-list>
      <v-list-item
      v-for="(bet, i) in bets"
      :key="i">

      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import betAPI from '../api/betAPI';
import matchweeksAPI from '../api/matchweeksAPI';

export default {
  data() {
    return {
      bets: [],
    };
  },
  methods: {
    async init() {
      const bets = await betAPI.getBets();
      const betMatchesPromises = bets.map((bet) => matchweeksAPI.getMatch(bet.matchId));
      const betMatches = await Promise.all(betMatchesPromises);
      console.log(betMatches);
    },
  },
  async created() {
    await this.init();
  },
};
</script>
