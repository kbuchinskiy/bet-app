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

            <v-btn class="mx-auto" @click="register">Register</v-btn>
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
    async register() {
      try {
        const { data } = await authService.register({
          password: this.password,
          email: this.email,
        });
        this.$store.dispatch('setToken', data.token);
        this.$store.dispatch('setUser', data.user);
      } catch (error) {
        this.$toast.error(error.response.data.error, {
          timeout: 3000,
        });
      }
      // this.$store.dispatch('register', data);
    },
  },
};
</script>
