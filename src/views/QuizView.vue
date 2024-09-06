<script setup>
import { useRouter } from "vue-router";
import { quizStore, themeStore } from "@/assets/js/store";
import { ref } from "vue";
const router = useRouter();

const currentQuestion = ref(1);

if (!quizStore.selectedQuiz) {
  router.push("/");
}
</script>

<template>
  <section class="hero" :class="{ 'dark-theme': themeStore.darkTheme }">
    <p class="question-counter">
      Question {{ currentQuestion }} of
      {{ quizStore.selectedQuiz.questions.length }}
    </p>
    <p class="question">
      {{ quizStore.selectedQuiz.questions[currentQuestion].question }}
    </p>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

.hero {
  margin: 2rem 0;
  .question-counter {
    color: $fc-secondary-light;
    font-size: $fs-200;
    font-style: italic;
    margin: 0;
  }
  .question {
    color: $fc-primary-light;
    font-size: $fs-400;
    font-weight: $fw-medium;
    margin: 1rem 0;
    margin-bottom: 1rem;
  }
  &.dark-theme {
    .question-counter {
      color: $fc-secondary-dark;
    }
    .question {
      color: $fc-primary-dark;
    }
  }
}
</style>
