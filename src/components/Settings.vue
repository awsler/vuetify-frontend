<template>
  <v-flex xs12>
    <v-card>
      <v-card-title>
        <span class="title">Settings</span>
      </v-card-title>
      <v-card-text>
        <v-layout row wrap>
          <v-flex>
            <span>Theme</span>
            <v-switch v-model="dark" @change="toggleTheme" primary label="Dark"></v-switch>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    dark: true
  }),
  methods: {
    toggleTheme() {
      this.$emit("toggle-theme", this.dark);
    }
  }
};
</script>

<style scoped>
</style>
