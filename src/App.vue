<template>
  <v-app>
    <event-manager></event-manager>
  </v-app>
</template>

<script>
import EventManager from "@/components/EventManager";

export default {
  name: "App",
  components: {
    EventManager
  }
};
</script>

<style>
html {
  overflow-y: auto;
}
</style>
