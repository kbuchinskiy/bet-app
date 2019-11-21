<template>
  <v-list class="bet-list">
    <bet-event-component v-for="(eventData, i) in betData" :key="i" :event-data="eventData"></bet-event-component>
  </v-list>
</template>

<script>
import BetEventComponent from './BetEventComponent.vue';

export default {
  name: 'BetList',
  components: {
    BetEventComponent,
  },
  props: {
    betData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
