<script setup>
defineProps({
  iconBgColor: String,
});
</script>

<template>
  <button>
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <span class="btn-text"><slot name="text"></slot></span>
  </button>
</template>

<style scoped lang="scss">
button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    background-color: v-bind(iconBgColor);
    font-weight: 500;
  }
}
</style>
