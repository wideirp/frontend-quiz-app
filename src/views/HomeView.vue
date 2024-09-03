<script setup>
import { reactive } from "vue";
import QuizButton from "@/components/QuizButton.vue";
import IconHtml from "@/components/icons/IconHtml.vue";
import IconCss from "@/components/icons/IconCss.vue";
import IconJs from "@/components/icons/IconJs.vue";
import IconAccessibility from "@/components/icons/IconAccessibility.vue";

const bgColors = reactive({
  html: "#FFF1E9",
  css: "#E0FDEF",
  js: "#EBF0FF",
  accessibility: "#F6E7FF",
});
</script>

<template>
  <section class="hero">
    <h1>Welcome to the <br /><span>Frontend Quiz!</span></h1>
    <p>Pick a subject to get started.</p>
  </section>
  <section class="subjects">
    <QuizButton :iconBgColor="bgColors.html">
      <template #icon><IconHtml /></template>
      <template #text>Accessibility</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.css">
      <template #icon><IconCss /></template>
      <template #text>Accessibility</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.js">
      <template #icon><IconJs /></template>
      <template #text>Accessibility</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.accessibility">
      <template #icon><IconAccessibility /></template>
      <template #text>Accessibility</template>
    </QuizButton>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/sass/variables" as *;

.hero {
  margin: 2rem 0;
  h1 {
    color: $fc-primary;
    font-size: $fs-800;
    font-weight: $fw-light;
    margin: 0;
    margin-bottom: 1rem;
    span {
      font-weight: $fw-medium;
      text-align: justify;
    }
  }

  p {
    color: $fc-primary-light;
    font-size: $fs-200;
    font-style: italic;
    margin: 0;
  }
}

.subjects {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
