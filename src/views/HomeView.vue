<script setup>
import { ref } from "vue";
import { quizStore, themeStore } from "@/assets/js/store";
import QuizButton from "@/components/QuizSelector.vue";
import SvgIcon from "@/components/widgets/SvgIcon.vue";

const quizzes = ref(null);
quizStore.getData().then((data) => {
  quizzes.value = data;
});
</script>

<template>
  <section class="hero" :class="{ 'dark-theme': themeStore.darkTheme }">
    <h1>Welcome to the <br /><span>Frontend Quiz!</span></h1>
    <p>Pick a subject to get started.</p>
  </section>
  <section class="subjects">
    <QuizButton v-for="quiz in quizzes" :hoverColor="quiz.color">
      <template #icon>
        <SvgIcon
          :alt="quiz.title"
          :src="quiz.icon + '?image'"
          :bgColor="quiz.bgColor"
        />
      </template>
      <template #text>{{ quiz.title }}</template>
    </QuizButton>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

.hero {
  margin: 2rem 0;
  h1 {
    color: $fc-primary-light;
    font-size: $fs-800;
    font-weight: $fw-light;
    margin: 0;
    margin-bottom: 1rem;
    span {
      font-weight: $fw-medium;
      text-align: justify;
    }
  }
  p {
    color: $fc-secondary-light;
    font-size: $fs-200;
    font-style: italic;
    margin: 0;
  }
  &.dark-theme {
    h1 {
      color: $fc-primary-dark;
    }
    p {
      color: $fc-secondary-dark;
    }
  }
}

.subjects {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
