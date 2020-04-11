<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col sm="6">
          <v-form>
            <v-text-field v-model="name" label="name"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <v-btn class="mx-auto" @click="register">Register</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    register() {
      const data = {
        name: this.name,
        password: this.password,
      };
      this.$store.dispatch('register', data);
    },
  },
};
</script>
