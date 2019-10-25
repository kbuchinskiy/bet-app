<template>
  <v-list-item class="bet-event">
    <v-subheader class="team-name home pl-5">
      {{ eventData.teams[0] }}
      <br>
      {{ eventData.teams[1] }}
    </v-subheader>
    <v-list-item-group class="pr-5">
      <v-btn>{{eventData.odds[0]}}</v-btn>
      <v-btn class="mx-5">{{eventData.odds[1]}}</v-btn>
      <v-btn>{{eventData.odds[2]}}</v-btn>
    </v-list-item-group>
  </v-list-item>
</template>

<script>
    export default {
        name: "BetEventComponent",
        props: {
            eventData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
  .bet-event {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
</style>
