<template>
    <div class="nav-links">
        <router-link class="nav-link" v-for="(link, index) in links" :to="link.path" :key="index">
            <unicon :name="link.icon" fill="#627D98" width="30px" height="27px" style="margin-right: 1rem;"></unicon>
            {{ link.text }}
        </router-link>
    </div>
</template>

<script setup>
import links from '@/utils/links'
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
    .nav-links {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
    }

    .nav-link {
        display: flex;
        align-items: center;
        color: var(--grey-500);
        padding: 0.75rem 0;
        padding-left: 2.5rem;
        text-transform: capitalize;
        transition: var(--transition);
    }

    .nav-link:hover {
        background: var(--grey-50);
        padding-left: 3rem;
        color: var(--grey-900);
    }

    .nav-link:hover .icon {
        color: var(--primary-500);
    }

    .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
        transition: var(--transition);
    }

    .active {
        color: var(--grey-900);
    }

    .active .icon {
        color: var(--primary-500);
    }
}
</style>