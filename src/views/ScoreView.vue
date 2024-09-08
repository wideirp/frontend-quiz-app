<script setup>
import { useRouter } from "vue-router";
import { QuizStore, themeStore } from "@/assets/js/store";
import SvgIcon from "@/components/widgets/SvgIcon.vue";

const router = useRouter();

if (QuizStore.questionIndex < 10) {
  onResetGame();
}

function onResetGame() {
  QuizStore.reset();
  router.push("/frontend-quiz-app/");
}
</script>

<template>
  <section class="hero" :class="{ 'dark-theme': themeStore.darkTheme }">
    <h1>Quiz completed <br /><span>You scored...</span></h1>
  </section>

  <section
    class="score"
    v-if="QuizStore.title"
    :class="{ 'dark-theme': themeStore.darkTheme }"
  >
    <div class="scoreboard">
      <div class="current-quiz">
        <SvgIcon
          :src="QuizStore.icon + '?image'"
          :alt="QuizStore.title"
          :bgColor="QuizStore.bgColor"
          v-if="QuizStore.title"
        />
        <p v-if="QuizStore.title">{{ QuizStore.title }}</p>
      </div>
      <p class="score__result">{{ QuizStore.correct }}</p>
      <p class="score__num-questions">
        out of {{ QuizStore.questions.length }}
      </p>
    </div>
    <button class="reset-btn" @click.prevent="onResetGame">Play Again</button>
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
  &.dark-theme {
    h1 {
      color: $fc-primary-dark;
    }
  }
}

.score {
  .scoreboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $clr-btn-primary-light;
    padding: 2rem;
    color: $fc-primary-light;
    border-radius: 8px;
    .current-quiz {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.1rem;
      font-weight: 500;
      p {
        margin: 0;
      }
    }

    .score__result {
      font-size: 5.5rem;
      margin: 1rem 0;
      font-weight: 500;
    }
    .score__num-questions {
      margin: 0;
      color: $fc-secondary-light;
      font-size: 1.1rem;
    }
  }
  .reset-btn {
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
  &.dark-theme {
    .scoreboard {
      background-color: $clr-btn-primary-dark;
      color: $fc-primary-dark;
      .score__num-questions {
        color: $fc-secondary-dark;
      }
    }
  }
}
</style>
