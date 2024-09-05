<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String },
  bgColor: { type: String, default: "#ccc" },
});
</script>

<template>
  <picture>
    <img :src="src" :alt="alt" />
  </picture>
</template>

<style scoped lang="scss">
picture {
  display: flex;
  background-color: v-bind(bgColor);
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;
}

img {
  width: 1.75rem;
}
</style>
