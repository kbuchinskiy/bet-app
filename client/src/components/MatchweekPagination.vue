<template>
    <div class="d-flex justify-space-between align-start my-5">
    <v-btn @click="changeMatchweek(-1)"
      :disabled="matchweek.id === 1">Prev</v-btn>
    <p class="ma-auto headline">Matchweek {{ matchweek.id }} of {{ matchweeksAmount }}</p>
    <v-btn @click="changeMatchweek(1)"
      :disabled="matchweek.id === matchweeksAmount">Next</v-btn>
  </div>
</template>

<script>
import matchweeksAPI from '../api/matchweeksAPI';

export default {
  props: {
    basePath: {
      required: true,
    },
  },
  data: () => ({
    matchweek: {
      id: null,
      matches: [],
    },
    matchweeksAmount: null,
  }),
  watch: {
    '$route.params': 'updateMatchweek',
  },
  methods: {
    async updateMatchweek() {
      this.matchweek = await matchweeksAPI
        .getMatchweekById(this.$route.params.id || 'current');
      this.$emit('matchweekUpdated', this.matchweek);
    },
    async changeMatchweek(direction) {
      const nextMatchweek = this.matchweek.id + direction;
      const params = {
        id: nextMatchweek,
      };

      this.$router
        .push({ name: this.basePath, params });
    },
    async init() {
      this.updateMatchweek();
      this.matchweeksAmount = await matchweeksAPI.getTotalAmount();
    },

  },
  created() {
    this.init();
  },
};
</script>
