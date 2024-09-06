<script setup>
import { themeStore } from "@/assets/js/store.js";
defineProps({
  optionIndex: { type: Number, required: true },
  option: { type: String, required: true },
  correct: { type: Boolean, default: false },
  incorrect: { type: Boolean, default: false },
});
</script>

<template>
  <button
    :class="{
      'dark-theme': themeStore.darkTheme,
      correct: correct,
      incorrect: incorrect,
    }"
    @mouseup="$emit('click-answer', option, $event)"
  >
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
  color: $fc-primary-light;
  background-color: $clr-btn-primary-light;
  border: 2px solid $clr-btn-primary-light;
  outline: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
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
    width: 2.75rem;
    height: 1.75rem;
  }
  &.correct {
    border-color: $clr-green;
    .letter {
      background-color: $clr-green;
      color: $clr-pure-white;
    }
  }
  &.incorrect {
    border-color: $clr-red;
    .letter {
      background-color: $clr-red;
      color: $clr-pure-white;
    }
  }
  &.dark-theme {
    background-color: $clr-btn-primary-dark;
    border: 2px solid $clr-btn-primary-dark;
    color: $fc-primary-dark;
  }
  &:hover:not(:disabled) {
    border-color: $clr-purple;
    .letter {
      background-color: $clr-purple;
      color: $clr-pure-white;
    }
  }
  &:active:not(:disabled) {
    transform: scale(0.99);
    box-shadow: 1px 1px 2px $clr-purple;
  }
  // &:disabled {
  //   color: none;
  // }
}
</style>
