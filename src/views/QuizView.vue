<script setup>
import QuizAnswer from "@/components/QuizAnswer.vue";
import { useRouter } from "vue-router";
import { quizStore, themeStore } from "@/assets/js/store";
import { ref } from "vue";
const router = useRouter();

const currentQuestion = ref(1);

if (!quizStore.selectedQuiz) {
  router.push("/");
}

function onClickAnswer(option, event) {
  event.preventDefault();
  // console.log(event.currentTarget);
  const t = event.currentTarget;
  t.parentNode.childNodes.forEach((btn) => {
    btn.disabled = true;
  });
  if (
    option === quizStore.selectedQuiz.questions[currentQuestion.value].answer
  ) {
    t.classList.add("correct");
  } else {
    t.classList.add("incorrect");
  }
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
  <section class="options">
    <QuizAnswer
      v-for="(option, index) in quizStore.selectedQuiz.questions[
        currentQuestion
      ].options"
      :optionIndex="index"
      :option
      @click-answer="onClickAnswer"
    />
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

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
