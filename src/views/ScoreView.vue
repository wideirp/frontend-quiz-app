<script setup>
import { useRouter } from "vue-router";
import { homeStore, QuizStore, themeStore } from "@/assets/js/store";

const router = useRouter();

if (QuizStore.questionIndex < 10) {
  QuizStore.reset();
  router.push("/");
}

// function onAnswer(e) {
//   if (QuizStore.selectedOption) {
//     QuizStore.questionAnswered = true;
//   } else {
//     console.log("no option selected");
//     QuizStore.emptyError = true;
//   }
// }

// function onNext(e) {
//   if (QuizStore.questionIndex >= 10) {
//     router.push("/score");
//   } else {
//     QuizStore.nextQuestion();
//   }
// }
</script>

<template>
  <h1>Score View</h1>
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

.select {
  .options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .select-btn {
    width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: $clr-purple;
    color: $clr-pure-white;
    font-weight: $fw-medium;
    &:active {
      transform: scale(0.98);
      background-color: adjust-color($clr-purple, $lightness: -10%);
    }
  }

  .no-answer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    img {
      width: 2rem;
    }
    p {
      color: $clr-red;
    }
  }
}
</style>
