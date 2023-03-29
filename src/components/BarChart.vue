<template>
  <Bar id="my-chart-id" :data="chartData" />
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps(["data"]);

const arrDates = [];
props.data.map((item) => arrDates.push(item.date));

const arrCount = [];
props.data.map((item) => arrCount.push(item.count));

const chartData = ref({
  labels: arrDates,
  datasets: [{ label: "Jobs", backgroundColor: "#3B82F6", data: arrCount }],
  // datasets: arrCount ,
});
</script>

<style lang="scss" scoped></style>
