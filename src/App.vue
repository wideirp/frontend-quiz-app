<script setup>
import { RouterView } from "vue-router";
import QuizHeader from "./components/QuizHeader.vue";
</script>

<template>
  <div class="wrapper">
    <QuizHeader />

    <main>
      <!-- Add router for home, quiz and result view -->
      <!-- All three views will have the same main container layout -->
      <RouterView />
    </main>
  </div>
</template>

<style>
.wrapper {
  padding: 1rem;
}
</style>
