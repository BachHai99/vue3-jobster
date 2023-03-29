<template>
  <div class="wrapper">
    <span class="icon"
      ><unicon :name="props.icon" fill="grey" width="22px" class="icon"
    /></span>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["icon", "text"]);
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}
.icon {
  font-size: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  svg {
    color: var(--grey-400);
  }
}
.text {
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}
</style>
