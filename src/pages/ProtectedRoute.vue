<template>
    <router-link to="/landing" v-if="!user"></router-link>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/userStore';

const store = userStore();
const { user } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>