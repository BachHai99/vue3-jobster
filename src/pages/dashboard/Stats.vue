<template>
  <stats-container />
  <chart-container v-if="monthlyApplications.length > 0" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { allJobsStore } from "@/stores/allJobsStore";
import StatsContainer from "@/components/StatsContainer.vue";
import ChartContainer from "@/components/ChartContainer.vue";

const store = allJobsStore();

const { monthlyApplications } = storeToRefs(store);

onMounted(() => {
  store.showStats();
});
</script>

<style lang="scss" scoped></style>
