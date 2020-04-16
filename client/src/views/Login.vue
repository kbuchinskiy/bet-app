<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col sm="6">
          <v-form>
            <v-text-field v-model="name" label="name"></v-text-field>

            <v-text-field
              v-model="email"
              type="mail"
              label="email"
            ></v-text-field>

            <v-text-field
              v-model="password"
              type="password"
              label="password"
            ></v-text-field>

            <v-btn class="mx-auto" @click="login">Login</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import authService from '../api/authService';

export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await authService.login({
          // name: this.name,
          password: this.password,
          email: this.email,
        });

        this.$store.dispatch('setToken', data.token);
        this.$store.dispatch('setUser', data.user);
        const { nextUrl } = this.$store.state.route.query;
        this.$router.push(nextUrl || '/bettingRoom');
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          timeout: 3000,
        });
      }
    },
  },
};
</script>
