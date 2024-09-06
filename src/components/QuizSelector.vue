<script setup>
import { useRouter } from "vue-router";
import { themeStore, quizStore } from "@/assets/js/store";
defineProps({ hoverColor: { type: String, default: "#ccc" } });

const router = useRouter();

const onClick = function (event) {
  const selectedTitle = event.currentTarget.innerText;
  const quizData = quizStore.getData().then((quizzes) => {
    const quiz = quizzes.filter((quiz) => quiz.title === selectedTitle)[0];
    quizStore.selectedQuiz = quiz;
    console.log(quiz.title + " quiz is selected");
    router.push("quiz");
  });
};
</script>

<template>
  <button :class="{ 'dark-theme': themeStore.darkTheme }" @click="onClick">
    <slot name="icon"></slot>
    <span class="btn-text">
      <slot name="text"></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

button {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  background-color: $clr-btn-primary-light;
  border: 2px solid $clr-btn-primary-light;
  outline: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  &.dark-theme {
    background-color: $clr-btn-primary-dark;
    border: 2px solid $clr-btn-primary-dark;
    color: $fc-primary-dark;
  }

  &:hover {
    border-color: v-bind(hoverColor);
  }

  &:active {
    transform: scale(0.99);
    border-color: v-bind(hoverColor);
    box-shadow: 1px 1px 2px v-bind(hoverColor);
  }
}
</style>
