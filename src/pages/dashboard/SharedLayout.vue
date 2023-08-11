<template>
    <!-- <protected-route> -->
        <section>
            <main class="dashboard">
                <big-sidebar />
                <div>
                    <navbar />
                    <div class="dashboard-page">
                        <!-- <slot></slot> -->
                        <router-view />
                    </div>
                </div>
            </main>
        </section>
    <!-- </protected-route> -->
</template>

<script setup>
import BigSidebar from '@/components/BigSidebar.vue';
import Navbar from '@/components/Navbar.vue';
// import ProtectedRoute from '../ProtectedRoute.vue';
</script>

<style lang="scss" scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr;
}

.dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
}

@media (min-width: 992px) {
    .dashboard {
        grid-template-columns: auto 1fr;
    }

    .dashboard-page {
        width: 90%;
    }
}
</style>