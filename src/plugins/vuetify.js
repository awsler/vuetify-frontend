import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#ff9800",
    secondary: "#ffc107",
    accent: "#ff9800",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#03a9f4",
    success: "#8bc34a"
  }
});
