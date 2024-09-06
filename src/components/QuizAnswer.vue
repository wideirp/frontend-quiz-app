<script setup>
import { themeStore } from "@/assets/js/store.js";
defineProps({
  optionIndex: { type: Number, required: true },
  option: { type: String, required: true },
});
</script>

<template>
  <button :class="{ 'dark-theme': themeStore.darkTheme }">
    <p class="letter">{{ "ABCD"[optionIndex] }}</p>
    <p class="answer">{{ option }}</p>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

button {
  display: flex;
  gap: 1rem;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
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

.letter {
  display: flex;
  color: $clr-grey-navy;
  background-color: $clr-light-grey;
  padding: 0.375rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
  width: 1.75rem;
  height: 1.75rem;
}
</style>
