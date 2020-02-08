<template>
  <v-container>
    <v-list>
      <v-list-item
      v-for="(bet, i) in bets"
      :key="i"
      :class="{unsuccess: !bet.success}">
        {{ `${bet.teams[0]} - ${bet.teams[1]}` }} |
        {{ bet.score[0] + ' : ' + bet.score[1] }} |
        {{ getBetOutcomeText(i) }}
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
    getBetOutcomeText(betIndex) {
      const bet = this.bets[betIndex];
      if (bet.outcomeBet === 1) {
        return 'draw';
      }
      return `win ${bet.teams[bet.outcomeBet ? bet.outcomeBet - 1 : bet.outcomeBet]}`;
    },
    async init() {
      const bets = await betAPI.getBets();
      console.log(bets);
      const betMatchesPromises = bets.map((bet) => matchweeksAPI.getMatch(bet.matchId));
      const betMatches = await Promise.all(betMatchesPromises);
      this.bets = betMatches.map((match, i) => {
        const betItem = { ...match };
        betItem.outcomeBet = bets[i].outcomeBet;
        betItem.success = bets[i].success;
        return betItem;
      });
    },
  },
  async created() {
    await this.init();
  },
};
</script>

<style>
  .unsuccess {
    text-decoration: line-through;
  }
</style>
