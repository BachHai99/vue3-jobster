<template>
    <div class="nav-links">
        <router-link v-for="(link, index) in links" :to="link.path" :key="index" @click="store.toggleSidebar"><span
                class="icon">
                <unicon :name="link.icon" fill="#627D98" width="30px" height="30px"></unicon>
            </span>{{ link.text }}</router-link>
    </div>
    <!-- {{$t('welcome')}} -->
</template>

<script setup>
import links from '@/utils/links'
import { userStore } from '@/stores/userStore';

const store = userStore();
</script>

<style lang="scss" scoped></style>