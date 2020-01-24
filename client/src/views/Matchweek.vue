<template>
  <v-container>
    <matchweek-pagination
    @matchweekUpdated="updateMatchweek"
    basePath="matchweek-view-id"></matchweek-pagination>
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
import MatchweekPagination from '../components/MatchweekPagination.vue';

export default {
  components: {
    MatchweekPagination,
  },
  data() {
    return {
      matchweek: {
        id: null,
        matches: [],
      },
    };
  },
  methods: {
    updateMatchweek(payload) {
      this.matchweek = payload;
    },
  },

};
</script>
