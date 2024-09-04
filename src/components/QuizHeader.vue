<script setup>
import CheckboxSlider from "./widgets/CheckboxSlider.vue";
</script>

<template>
  <header>
    <div class="theme">
      <picture>
        <img src="/icon-sun-dark.svg?image" alt="sun" />
      </picture>
      <CheckboxSlider bgUnchecked="#a729f5" bgChecked="#a729f5" />
      <picture>
        <img src="/icon-moon-dark.svg?image" alt="moon" />
      </picture>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

header {
  display: flex;
  justify-content: flex-end;
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
