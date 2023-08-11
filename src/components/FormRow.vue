<template>
  <div class="form-row">
    <label :htmlFor="props.name" class="form-label">
      {{ labelText || name }}
    </label>
    <input :id="props.name" :type="props.type" :name="props.name" :value="props.modelValue" class="form-input"
      v-on:input="handleChange($event.target.value)" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["type", "name", "labelText", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const handleChange = (val) => {
  emit('update:modelValue', val);
}
</script>

<style lang="scss" scoped>
.form-label {
  display: block;
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  text-align: left;
  letter-spacing: var(--letterSpacing);
}

.form-row {
  margin-bottom: 1rem;
}

</style>
