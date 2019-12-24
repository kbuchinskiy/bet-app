<template>
  <v-container class="d-flex align-center">
    <p class="mr-10 mb-0">
      {{ matchData.teams[0] }}
      <br />
      {{ matchData.teams[1] }}
    </p>
    <v-btn-toggle v-model="outcomeBet" @change="betChoise()" :tile="true">
      <v-btn
        v-for="(odd, index) in matchData.odds"
        :key="index"
        :value="index">{{ odd }}</v-btn>
    </v-btn-toggle>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      outcomeBet: null,
    };
  },
  props: {
    matchData: null,
  },
  methods: {
    betChoise() {
      const betData = {
        outcome: this.outcomeBet,
        matchData: this.matchData,
      };
      this.$emit('outcomeChosen', betData);
    },
  },
};
</script>
