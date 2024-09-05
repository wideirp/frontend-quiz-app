<script setup>
import { themeStore } from "@/assets/js/store";
import CheckboxSlider from "./widgets/CheckboxSlider.vue";
import SvgIcon from "./widgets/SvgIcon.vue";

if (themeStore.darkTheme) {
  console.log(themeStore.darkTheme);
}
</script>

<template>
  <header :class="{ 'dark-theme': themeStore.darkTheme }">
    <div class="current-quiz">
      <SvgIcon src="/icon-js.svg?image" alt="html" bgColor="#EBF0FF" />
      <p>Javascript</p>
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
  display: flex;
  justify-content: space-between;
  color: $fc-primary-light;
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
