<script setup>
import { store } from "@/assets/js/store";
defineProps({
  bgUnchecked: { type: String, default: "#ccc" },
  bgChecked: { type: String, default: "#ccc" },
  toggleColor: { type: String, default: "#fff" },
});

const onChange = (event) => {
  const isChecked = event.target.checked;
  store.setDarkTheme(isChecked);
};
</script>

<template>
  <label class="switch" for="checkbox">
    <input type="checkbox" name="checkbox" id="checkbox" @change="onChange" />
    <div class="slider round"></div>
  </label>
</template>

<style scoped lang="scss">
.switch {
  display: inline-block;
  height: 1.25rem;
  position: relative;
  width: 2rem;
  input {
    display: none;
    &:checked + .slider:before {
      transform: translateX(0.75rem);
    }
    &:checked + .slider {
      background-color: v-bind(bgChecked);
    }
  }
  .slider {
    background-color: v-bind(bgUnchecked);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    &:before {
      background-color: v-bind(toggleColor);
      bottom: 0.25rem;
      left: 0.25rem;
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      position: absolute;
      transition: 0.4s;
    }
  }
  .slider.round {
    border-radius: 34px;
    &:before {
      border-radius: 50%;
    }
  }
}
</style>
