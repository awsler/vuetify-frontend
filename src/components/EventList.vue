<template>
  <v-flex xs12>
    <v-card>
      <v-card-title>
        <span class="title">{{ title }}</span>
      </v-card-title>
      <v-container>
        <template v-for="(item, index) in events">
          <v-list-tile :key="item.key" avatar ripple @click="toggle(item)">
            <v-list-tile-avatar>
              <v-icon x-large>event</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title style="color: orange">{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-if="item.favorite" color="yellow darken-2">star</v-icon>
              <v-icon v-else color="grey lighten-1">star_border</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider :key="index"></v-divider>
        </template>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    events: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggle(item) {
      item.favorite = !item.favorite;
    }
  }
};
</script>

<style scoped>
</style>
