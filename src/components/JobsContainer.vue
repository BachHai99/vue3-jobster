<template>
  <loading v-if="isLoading" />
  <section v-else-if="jobs.length === 0">
    <h2>No jobs to display...</h2>
  </section>
  <section v-else>
    <h5 style="text-align: left;">{{ totalJobs }} {{ $t('jobFound') }}</h5>
    <div class="jobs">
      <job v-for="(job, index) in jobs" :key="index" :job="job" />
    </div>
    <page-btn-container v-if="numOfPages > 1" />
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { allJobsStore } from "@/stores/allJobsStore";
import Loading from "./Loading.vue";
import Job from "./Job.vue";
import PageBtnContainer from "./PageBtnContainer.vue";

const store = allJobsStore();
const { isLoading, jobs, totalJobs, numOfPages, page, search, searchStatus, searchType, sort } = storeToRefs(store);

onMounted(() => {
  store.getAllJobs();
  store.showStats();
});

watch([sort, page, searchStatus, searchType, search], store.getAllJobs)
</script>

<style lang="scss" scoped>
section {
  margin-top: 4rem;
}

h2 {
  text-transform: none;
}

// & > h5 {
//   font-weight: 700;
// }
.jobs {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
}

@media (min-width: 992px) {
  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
