<script setup>
import { reactive } from "vue";
import QuizButton from "@/components/QuizButton.vue";
import SvgIcon from "@/components/widgets/SvgIcon.vue";

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
      <template #icon>
        <SvgIcon
          src="/icon-html.svg?image"
          alt="html"
          :bgColor="bgColors.html"
        />
      </template>
      <template #text>HTML</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.css">
      <template #icon>
        <SvgIcon src="/icon-css.svg?image" alt="html" :bgColor="bgColors.css"
      /></template>
      <template #text>CSS</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.js">
      <template #icon>
        <SvgIcon src="/icon-js.svg?image" alt="html" :bgColor="bgColors.js"
      /></template>
      <template #text>Javascript</template>
    </QuizButton>
    <QuizButton :iconBgColor="bgColors.accessibility">
      <template #icon>
        <SvgIcon
          src="/icon-accessibility.svg?image"
          alt="html"
          :bgColor="bgColors.accessibility"
      /></template>
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
