<template>
  <v-container>
    <v-list>
      <v-list-item v-for="(bet, i) in bets" :key="i">
        <v-icon small class="pr-2">
          {{
            bet.success === undefined
              ? "mdi-progress-clock"
              : bet.success === false
              ? "mdi-cancel"
              : "mdi-checkbox-marked-circle"
          }}
        </v-icon>
        {{ `${bet.teams[0]} - ${bet.teams[1]}` }} |
        {{ bet.score[0] + " : " + bet.score[1] }} |
        {{ getBetOutcomeText(i) }}
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import betService from '../api/betService';
import matchService from '../api/matchService';

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
      return `win ${
        bet.teams[bet.outcomeBet ? bet.outcomeBet - 1 : bet.outcomeBet]
      }`;
    },
    async init() {
      const bets = await betService.getBets();
      const betMatchesPromises = bets.map((bet) => matchService.getMatch(bet.matchId));
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
