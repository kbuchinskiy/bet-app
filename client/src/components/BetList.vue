<template>
  <v-list class="bet-list">
    <template
      v-for="(eventData, i) in betData"
    >
      <bet-event-component
        :key="i"
        :event-data="eventData"
      ></bet-event-component>
      <v-divider :key="'1' + i"></v-divider>
    </template>

  </v-list>
</template>

<script>
    import BetEventComponent from "./BetEventComponent"

    export default {
        name: 'BetList',
        components: {
            BetEventComponent
        },
        props: {
            betData: {
                type: Array,
                required: true
            }
        }
    }
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
