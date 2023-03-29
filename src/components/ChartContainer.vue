<template>
  <section>
    <h4>Moothly Applications</h4>
    <button type="button" @click="toggleChart">
      {{ showBarChart ? "Line Chart" : "Bar Chart" }}
    </button>
    <bar-chart v-if="showBarChart" :data="data" />
    <line-chart v-else :data="data" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { allJobsStore } from "@/stores/allJobsStore";
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";

const store = allJobsStore();
const { monthlyApplications: data } = storeToRefs(store);

const showBarChart = ref(true);

const toggleChart = () => {
  showBarChart.value = !showBarChart.value;
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 4rem;
  text-align: center;
}

button {
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  color: var(--primary-500);
  font-size: 1.25rem;
  cursor: pointer;
}
h4 {
  text-align: center;
  margin-bottom: 0.75rem;
}
</style>
