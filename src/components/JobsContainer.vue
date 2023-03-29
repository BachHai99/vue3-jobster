<template>
  <loading v-if="isLoading" />
  <h2 v-if="jobs.length === 0">No jobs to display...</h2>
  {{typeof jobs}}
  <section>
    <h5>{{ totalJobs }} job found</h5>
    <div class="jobs">
      <job
        v-for="(job, index) in jobs"
        :key="index"
        :job="job"
      />
    </div>
    <!-- :_id="job._id"
        :position="job.position"
        :company="job.company"
        :jobLocation="job.jobLocation"
        :jobType="job.jobType"
        :createAt="job.createAt"
        :status="job.status" -->
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { allJobsStore } from "@/stores/allJobsStore";
import Loading from "./Loading.vue";
import Job from "./Job.vue";

const store = allJobsStore();
const { isLoading, jobs, totalJobs } = storeToRefs(store);

onMounted(() => {
  store.getAllJobs();
  store.showStats();
});
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
