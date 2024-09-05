<script setup>
import { store } from "@/assets/js/store";
defineProps({
  iconBgColor: String,
});
</script>

<template>
  <button :class="{ 'dark-theme': store.darkTheme }">
    <slot name="icon"></slot>
    <span class="btn-text">
      <slot name="text"></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  background-color: $clr-btn-primary-light;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  // box-shadow: 0px 1px 5px #8fa0c144;
  &.dark-theme {
    background-color: $clr-btn-primary-dark;
    color: $fc-primary-dark;
  }
}
</style>
