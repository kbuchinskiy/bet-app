<template>
  <v-container>
    <match-bet
      v-for="(match, index) in matchweek.matches"
      :key="index"
      :match-data="match"
      @outcomeChosen="outcomeChosen"
    ></match-bet>
  </v-container>
</template>

<script>
import MatchBet from '../components/MatchBet.vue';
import matchweeksAPI from '../api/matchweeks';

export default {
  components: {
    MatchBet,
  },
  data() {
    return {
      matchweek: [],
    };
  },
  methods: {
    outcomeChosen(betData) {
      console.log(betData);
    },
  },
  created() {
    matchweeksAPI.getMatchweekById('current').then((data) => {
      this.matchweek = data;
    });
  },
};
</script>
