<template>
  <v-container>
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
          <tr v-for="item in matches" :key="item.name">
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
import axios from "axios";
export default {
  data() {
    return {
      matchweekId: "",
      matches: []
    };
  },
  methods: {},
  created() {
    axios
      .get("http://localhost:7112/matchweek/", this.matches)
      .then(res => {
      this.matches = res.data;
    });
  }
};
</script>