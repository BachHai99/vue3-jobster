<template>
  <div name="form-row">
    <label :htmlFor="props.name" name="form-label">
      <!-- {{ labelText }} -->
    </label>
    {{ props.type }} - {{ props.name }} - {{ props.value }}
    <input
      :id="props.name"
      :type="props.type"
      :name="props.name"
      :value="props.value"
      class="form-input"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["type", "name", "value"]);
// const emit = defineEmits(["handleChange"]);

// const handleChangeInput = (e) => {
//   // emit('handleChange', e);
// }
</script>

<style lang="scss" scoped></style>
