<template>
  <v-app id="manager" :dark="dark">
    <v-toolbar app flex>
      <v-toolbar-title>Event Manager</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl>
        <v-layout column v-show="bottomNav === 'events'">
          <event-list :events="events" :title="'All Events'"></event-list>
          <add-event v-on:add-event="onAddEvent"></add-event>
        </v-layout>
        <v-layout v-show="bottomNav === 'favorites'">
          <event-list :events="favorites" :title="'Favorite Events'"></event-list>
        </v-layout>
        <v-card v-show="bottomNav === 'settings'">
          <settings v-on:toggle-theme="onToggleTheme"></settings>
        </v-card>
      </v-container>
    </v-content>
    <v-bottom-nav :active.sync="bottomNav" :value="events" app mandatory>
      <v-btn color="orange" flat value="events">
        <span>Events</span>
        <v-icon>event</v-icon>
      </v-btn>
      <v-btn color="orange" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn color="orange" flat value="settings">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import AddEvent from "@/components/AddEvent.vue";
import EventList from "@/components/EventList.vue";
import Settings from "@/components/Settings.vue";

export default {
  data: () => ({
    dark: true,
    bottomNav: "events",
    // Pre-generated with help of https://www.mockaroo.com
    events: [
      {
        name: "Programmable intermediate Graphical User Interface",
        description:
          "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        favorite: true
      },
      {
        name: "Fundamental next generation data-warehouse",
        description: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        favorite: false
      },
      {
        name: "Polarised bottom-line website",
        description:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        favorite: false
      },
      {
        name: "Universal holistic array",
        description:
          "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
        favorite: false
      },
      {
        name: "Future-proofed modular customer loyalty",
        description: "Proin eu mi. Nulla ac enim.",
        favorite: true
      },
      {
        name: "Ameliorated zero administration hub",
        description:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        favorite: true
      },
      {
        name: "Synergistic background archive",
        description:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
        favorite: false
      },
      {
        name: "Mandatory intangible interface",
        description:
          "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
        favorite: true
      },
      {
        name: "Multi-tiered motivating standardization",
        description: "Nullam varius. Nulla facilisi.",
        favorite: false
      },
      {
        name: "Networked needs-based portal",
        description: "Nulla mollis molestie lorem. Quisque ut erat.",
        favorite: false
      }
    ]
  }),
  methods: {
    onAddEvent: function(event) {
      this.events.push(event);
    },
    onToggleTheme() {
      this.dark = !this.dark;
    }
  },
  computed: {
    favorites: function() {
      return this.events.filter(item => item.favorite);
    }
  },
  components: {
    AddEvent,
    EventList,
    Settings
  }
};
</script>

<style scoped>
</style>
