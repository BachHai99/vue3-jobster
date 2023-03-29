<template>
  <section>
    <stats-item
      v-for="(stat, index) in defaultStats"
      :key="index"
      :stat="stat"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { allJobsStore } from "@/stores/allJobsStore";
import StatsItem from "./StatsItem.vue";

const store = allJobsStore();

const { stats } = storeToRefs(store);

const defaultStats = ref([]);

// const defaultStats = [
//   {
//     title: "pending applications",
//     // title: '',
//     count: stats.value.pending || 0,
//     icon: "briefcase-alt",
//     bcg: "#fcefc7",
//   },
//   {
//     title: "interviews scheduled",
//     count: stats.value.interview || 0,
//     icon: "file-check",
//     color: "#647acb",
//     bcg: "#e0e8f9",
//   },
//   {
//     title: "jobs declined",
//     count: stats.value.declined || 0,
//     icon: "bug",
//     color: "#d66a6a",
//     bcg: "#ffeeee",
//   },
// ];

onMounted(() => {
  defaultStats.value = [
    {
      title: "pending applications",
      // title: '',
      count: stats.value.pending || 0,
      icon: "briefcase-alt",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.value.interview || 0,
      icon: "file-check",
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.value.declined || 0,
      icon: "bug",
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
});

console.log(defaultStats.value);
</script>

<style lang="scss" scoped>
section {
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
}
</style>
