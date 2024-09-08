<script setup>
import { RouterView } from "vue-router";
import QuizHeader from "./components/QuizHeader.vue";
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

#app {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.wrapper {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  position: relative;
  & > :first-child {
    position: absolute;
    top: 1rem;
    right: 0;
  }
  @media screen and (min-width: 468px) {
    margin: 0 2rem;
    width: 80%;
    max-width: 62rem;
  }
}

main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    // margin-top: 3rem;
    & > * {
      width: 100%;
    }
  }
}
</style>
