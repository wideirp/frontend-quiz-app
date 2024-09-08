<script setup>
import QuizAnswer from "@/components/QuizAnswer.vue";
import { useRouter } from "vue-router";
import { homeStore, QuizStore, themeStore } from "@/assets/js/store";
import { ref } from "vue";
const router = useRouter();

const currentQuestion = ref(1);

if (!QuizStore.title) {
  router.push("/");
}

function onAnswer(e) {
  if (QuizStore.selectedOption) {
    QuizStore.questionAnswered = true;
  } else {
    console.log("no option selected");
    QuizStore.emptyError = true;
  }
}

function onNext(e) {
  QuizStore.nextQuestion();
}
</script>

<template>
  <section
    class="hero"
    :class="{ 'dark-theme': themeStore.darkTheme }"
    v-if="QuizStore.title"
  >
    <p class="question-counter">
      Question {{ QuizStore.questionIndex }} of
      {{ QuizStore.questions.length }}
    </p>
    <p class="question">
      {{ QuizStore.getQuestion() }}
    </p>
  </section>
  <section class="select" v-if="QuizStore.title">
    <div class="options">
      <QuizAnswer
        v-for="(option, index) in QuizStore.getOptions()"
        :optionIndex="index"
        :option
        @click.prevent="() => QuizStore.setOption(option)"
      />
    </div>
    <button
      class="select-btn"
      @click.prevent="onAnswer"
      v-show="!QuizStore.questionAnswered"
    >
      Submit Answer
    </button>
    <button
      class="select-btn"
      @click.prevent="onNext"
      v-show="QuizStore.questionAnswered"
    >
      Next Question
    </button>
    <div class="no-answer" v-if="QuizStore.emptyError">
      <img src="/icon-incorrect.svg?image" alt="" />
      <p>Please select and answer</p>
    </div>
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
