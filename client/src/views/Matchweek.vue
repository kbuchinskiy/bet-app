<template>
  <v-container>
    <div class="d-flex justify-space-between align-start my-5">
      <v-btn @click="changeMatchweek(-1)"
        :disabled="matchweek.id === 1">Prev</v-btn>
      <p class="ma-auto headline">Matchweek {{ matchweek.id }} of {{ matchweeksAmount }}</p>
      <v-btn @click="changeMatchweek(1)"
        :disabled="matchweek.id === matchweeksAmount">Next</v-btn>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-center">W 1</th>
            <th class="text-center">X 2</th>
            <th class="text-center">W 2</th>
            <th class="text-center">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in matchweek.matches" :key="item.name">
            <td class="text-left">
              {{ item.teams[0] }}
              <br />
              {{ item.teams[1] }}
            </td>
            <td v-for="(odd, index) in item.odds" :key="index" class="text-center">{{ odd }}</td>
            <td class="text-center">TBD</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import matchweeksAPI from '../api/matchweeks';

export default {
  data() {
    return {
      matchweek: {
        id: null,
        matchweek: [],
      },
      matchweeksAmount: null,
    };
  },
  watch: {
    '$route.params': 'updateMatchweek',
  },
  methods: {
    async updateMatchweek() {
      this.matchweek = await matchweeksAPI.getMatchweekById(this.$route.params.id);
    },
    async changeMatchweek(direction) {
      const nextMatchweek = this.matchweek.id + direction;
      const params = {
        id: nextMatchweek,
      };

      this.$router
        .push({ name: 'matchweek-view-id', params });
    },
    async init() {
      if (this.$route.params.id) {
        this.updateMatchweek();
      } else {
        this.matchweek = await matchweeksAPI.getMatchweekById('current');
      }
      this.matchweeksAmount = await matchweeksAPI.getTotalAmount();
    },
  },
  created() {
    this.init();
  },
};
</script>
