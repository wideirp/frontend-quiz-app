<script setup>
defineProps({
  bgUnchecked: { type: String, default: "#ccc" },
  bgChecked: { type: String, default: "#ccc" },
  toggleColor: { type: String, default: "#fff" },
});
</script>

<template>
  <label class="switch" for="checkbox">
    <input type="checkbox" name="checkbox" id="checkbox" />
    <div class="slider round"></div>
  </label>
</template>

<style scoped lang="scss">
.switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  input {
    display: none;
    &:checked + .slider:before {
      transform: translateX(26px);
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
      bottom: 4px;
      content: "";
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      width: 26px;
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
