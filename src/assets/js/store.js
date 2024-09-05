import { reactive } from "vue";

export const store = reactive({
  darkTheme: false,
  setDarkTheme: function (bool) {
    this.darkTheme = bool;
    if (this.darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    console.log("Theme set to : " + (this.darkTheme ? "Dark" : "Light"));
  },
});
