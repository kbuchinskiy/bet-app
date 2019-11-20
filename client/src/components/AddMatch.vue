<template>
  <v-row>
    <v-col cols="12" sm="2">
      <v-text-field v-model="betData.team1" label="Team Home" value="Chelsea" required></v-text-field>
    </v-col>
    <v-col cols="12" sm="2">
      <v-text-field v-model="betData.team2" label="Team Away" required></v-text-field>
    </v-col>

    <v-col cols="12" sm="1">
      <v-text-field v-model="betData.w1" :rules="rules.number" label="1" required></v-text-field>
    </v-col>
    <v-col cols="12" sm="1">
      <v-text-field v-model="betData.x" :rules="rules.number" label="X" required></v-text-field>
    </v-col>
    <v-col cols="12" sm="1">
      <v-text-field v-model="betData.w2" :rules="rules.number" label="2" required></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        number: [v => /^[0-9]+.[0-9]+$/.test(v) || "Wrong data"]
      },
      betData: {
        team1: "Chelsea",
        team2: "Arsenal",
        w1: 2.5,
        x: 3.0,
        w2: 2.5
      }
    };
  }
};
</script>