<script setup>
import { RouterView } from "vue-router";
import QuizHeader from "./components/QuizHeader.vue";
import { store } from "./assets/js/store";
</script>

<template>
  <div class="wrapper">
    <QuizHeader />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@use "@/assets/sass/variables" as *;

@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

body {
  min-height: 100vmax;
  font-family: "Rubik", sans-serif;
  background: no-repeat url("/pattern-background-mobile-light.svg");
  background-color: $bg-light;
  &.dark-theme {
    background-image: url("/pattern-background-mobile-dark.svg");
    background-color: $bg-dark;
  }
}

svg {
  width: 100%;
  height: 100%;
}

.wrapper {
  padding: 1rem;
}
</style>
