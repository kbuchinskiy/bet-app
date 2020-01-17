<template>
  <v-container>
    <v-row>
      <v-col>
        <match-bet
          v-for="(match, index) in matchweek.matches"
          :key="index"
          :match-data="match"
          :disabled="!existedBets.length"
          @outcomeChosen="outcomeChosen"
        ></match-bet>
      </v-col>
      <v-col>
        <v-btn class="mt-4" @click="betsPlaced()" :disabled="!betCart.length">Place bet</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
import MatchBet from '../components/MatchBet.vue';
import matchweeksAPI from '../api/matchweeks';

export default {
  components: {
    MatchBet,
  },
  data() {
    return {
      betCart: [],
      matchweek: [],
      existedBets: [],
    };
  },
  methods: {
    outcomeChosen(betData) {
      console.log(betData);
      if (betData.outcome) {
        this.betCart.push(betData);
      } else {
        this.betCart = this.betCart.filter((bet) => bet.matchId !== betData.matchId);
      }
    },
    betsPlaced() {
      axios.post('http://localhost:7113/bet/add', this.betCart)
        .then((res) => {
          this.existedBets = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {

  },
  async created() {
    await matchweeksAPI.getMatchweekById('current').then((data) => {
      this.matchweek = data;
    });

    axios.get('http://localhost:7113/bet/get', {
      params: { betsToCheck: this.matchweek.matches.map((match) => match.id) },
    })
      .then((res) => {
        this.existedBets = res.data;
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
