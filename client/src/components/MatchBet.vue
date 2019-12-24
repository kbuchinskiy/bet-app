<template>
  <v-container class="d-flex align-center">
    <p class="mr-10 mb-0">
      {{ matchData.teams[0] }}
      <br>
      {{ matchData.teams[1] }}
    </p>
    <v-btn
      v-for="(odd, index) in matchData.odds"
      :key="index"
      :tile="true"
      >{{ odd }}</v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    matchData: null,
  },
};
</script>
