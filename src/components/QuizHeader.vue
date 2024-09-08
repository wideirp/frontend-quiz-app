<script setup>
import { themeStore, QuizStore } from "@/assets/js/store";
import CheckboxSlider from "./widgets/CheckboxSlider.vue";
import SvgIcon from "./widgets/SvgIcon.vue";

if (themeStore.darkTheme) {
  console.log(themeStore.darkTheme);
}
</script>

<template>
  <header :class="{ 'dark-theme': themeStore.darkTheme }">
    <div class="current-quiz">
      <SvgIcon
        :src="QuizStore.icon + '?image'"
        :alt="QuizStore.title"
        :bgColor="QuizStore.bgColor"
        v-if="QuizStore.title"
      />
      <p v-if="QuizStore.title">{{ QuizStore.title }}</p>
    </div>
    <div class="theme">
      <picture>
        <img
          :src="
            themeStore.darkTheme
              ? '/icon-sun-light.svg?image'
              : '/icon-sun-dark.svg?image'
          "
          alt="sun"
        />
      </picture>
      <CheckboxSlider bgUnchecked="#a729f5" bgChecked="#a729f5" />
      <picture>
        <img
          :src="
            themeStore.darkTheme
              ? '/icon-moon-light.svg?image'
              : '/icon-moon-dark.svg?image'
          "
          alt="moon"
        />
      </picture>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: $fc-primary-light;
  min-height: 2.5rem;
  &.dark-theme {
    color: $fc-primary-dark;
  }
}

.current-quiz {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  p {
    margin: 0;
  }
}

.theme {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  picture {
    display: flex;
    img {
      width: 1rem;
    }
  }
}
</style>
