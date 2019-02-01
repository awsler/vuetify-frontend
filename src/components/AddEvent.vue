<template>
  <v-flex xs12>
    <v-card>
      <v-card-title>
        <span class="title">Add Event</span>
      </v-card-title>
      <v-form v-model="valid" ref="form">
        <v-container>
          <v-text-field
            v-model="name"
            :rules="requiredRule"
            label="Event Name"
            prepend-icon="event"
            required
            clearable
          ></v-text-field>
          <v-textarea
            v-model="description"
            :rules="requiredRule"
            label="Event Description"
            prepend-icon="event_note"
            auto-grow
            rows="1"
            required
            clearable
          ></v-textarea>
          <v-btn :disabled="!valid" color="primary" @click="submit">Submit</v-btn>
          <v-btn :disabled="!(name || description)" color="error" @click="reset">Reset</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    name: "",
    description: "",
    requiredRule: [v => !!v || "Field is required"],
    valid: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.valid = true;
        this.$emit("add-event", {
          name: this.name,
          description: this.description,
          favorite: false
        });
        this.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
</style>
