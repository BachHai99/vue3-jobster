<template>
    <div class="form-row">
        <label :for="props.name" class="form-label" style="text-align: left">
            {{ props.labelText || props.name }}
        </label>
        <select :name="props.name" :id="props.name" :value="props.modelValue" @change="handleChange($event)"
            class="form-select">
            <option v-for="(item, idx) in props.list" :key="idx">
                {{ item }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(["name", "list", "labelText", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const handleChange = (e) => {
    emit('update:modelValue', e.target.value);
}
</script>

<style lang="scss" scoped></style>