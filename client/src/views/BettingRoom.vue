<template>
  <v-container>
    <v-row>
      <v-col>
        <match-bet
          v-for="(match, index) in matchweek.matches"
          :key="index"
          :match-data="match"
          :disabled="placedBets.some(bet => bet.matchId === match.id)"
          :placed-outcome="placedBets.find(bet => bet.matchId === match.id)"
          @outcomeChosen="outcomeChosen"
        ></match-bet>
      </v-col>
      <v-col>
        <v-container class="mt-4 d-flex flex-column align-center">
          <v-btn class="mb-4" @click="betsPlaced()" :disabled="!betCart.length">Place bet</v-btn>
          <v-btn @click="cleanBetsCollections()" color="error">clean bets collection</v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MatchBet from '../components/MatchBet.vue';
import matchService from '../api/matchService';
import betService from '../api/betService';

export default {
  components: {
    MatchBet,
  },
  data() {
    return {
      betCart: [],
      matchweek: [],
      placedBets: [],
    };
  },
  methods: {
    outcomeChosen(betData) {
      if (Number.isInteger(betData.outcomeBet)) {
        this.betCart.push(betData);
      } else {
        this.betCart = this.betCart.filter(
          (bet) => bet.matchId !== betData.matchId,
        );
      }
    },
    async betsPlaced() {
      await betService.add(this.betCart);
      this.clear();
      this.getPlacedBets();
    },
    async getMatchweek() {
      await matchService.getMatchweekById('current').then((data) => {
        this.matchweek = data;
      });
    },
    async getPlacedBets() {
      this.placedBets = await betService.getPlacedBets(this.matchweek.matches);
    },
    async cleanBetsCollections() {
      try {
        await betService.clean();
        this.$toast.success('Collection cleaned');
        this.clear();
      } catch {
        this.$toast.error('Opps, smth went wrong');
      }
    },
    clear() {
      this.betCart = [];
      this.placedBets = [];
    },
  },
  watch: {},
  async created() {
    await this.getMatchweek();
    await this.getPlacedBets();
  },
};
</script>
