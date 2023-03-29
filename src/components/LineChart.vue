<template>
  <Line id="my-chart-id" :data="chartData" />
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Line } from "vue-chartjs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const props = defineProps(["data"]);

const arrDates = [];
props.data.map((item) => arrDates.push(item.date));

const arrCount = [];
props.data.map((item) => arrCount.push(item.count));

const chartData = ref({
  labels: arrDates,
  datasets: [{ label: "Jobs", backgroundColor: "#3B82F6", data: arrCount }],
});
</script>

<style lang="scss" scoped></style>
