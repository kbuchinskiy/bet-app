<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6" sm="8">
        <v-form>
          <v-text-field v-model="name" label="name"></v-text-field>
          <v-text-field v-model="password" label="password" type="password"></v-text-field>
          <v-btn @click="login">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
      const loginData = {
        name: this.name,
        password: this.password,
      };

      this.$store.dispatch('login', loginData)
        .then(() => {
          if (this.$route.query.nextUrl != null) {
            this.$router.push(this.$route.query.nextUrl);
          } else {
            this.$router.push('bettingRoom');
          }
        });
      // .catch((err) => console.log(err));
    },
  },
};
</script>
