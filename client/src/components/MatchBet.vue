<template>
  <v-container class="d-flex align-center">
    <p class="mr-10 mb-0">
      {{ matchData.teams[0] }}
      <br />
      {{ matchData.teams[1] }}
    </p>
    <v-btn-toggle
      v-model="outcomeBet"
      @change="betChoice()"
      :tile="true">
      <v-btn
        v-for="(odd, index) in matchData.odds"
        :key="index"
        :disabled="disabled"
        :value="index">{{ odd }}</v-btn>
    </v-btn-toggle>
  </v-container>
</template>

<script>
export default {
  props: {
    disabled: {
      default: true,
    },
    matchData: null,
    placedOutcome: null,
  },
  data() {
    return {
      outcomeBet: null,
    };
  },

  methods: {
    betChoice() {
      const betData = {
        outcome: this.outcomeBet,
        matchId: this.matchData.id,
      };
      this.$emit('outcomeChosen', betData);
    },
  },
  watch: {
    disabled() {
      if (this.disabled) {
        this.outcomeBet = this.placedOutcome.outcome;
      }
    },
    placedOutcome() {
      if (!this.placedOutcome) {
        this.outcomeBet = null;
      }
    },
  },
};
</script>
