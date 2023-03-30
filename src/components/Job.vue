<template>
  <article>
    <header>
      <div class="main-icon">{{ props.job.company.charAt(0) }}</div>
      <div class="info">
        <h5>{{ props.job.position }}</h5>
        <p>{{ props.job.company }}</p>
      </div>
    </header>
    <div class="content">
      <div class="content-center">
        <job-info icon="location-arrow" :text="props.job.jobLocation" />
        <job-info icon="calendar-alt" :text="date" />
        <job-info icon="briefcase-alt" :text="props.job.jobType" />
        <div class="status" :class="props.job.status">
          {{ props.job.status }}
        </div>
      </div>
      <footer>
        <div class="actions">
          <router-link
            to="/add-job"
            class="btn edit-btn"
            @click="
              storeJob.setEditJob({
                editJobId: props.job._id,
                position: props.job.position,
                company: props.job.company,
                jobLocation: props.job.jobLocation,
                jobType: props.job.jobType,
                status: props.job.status,
              })
            "
            >Edit</router-link
          >
          <button
            type="button"
            class="btn delete-btn"
            @click="storeJob.deleteJob(props.job._id)"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from "vue";
import moment from "moment";
import JobInfo from "./JobInfo.vue";
import { jobStore } from "@/stores/jobStore";

const props = defineProps(["job"]);

const storeJob = jobStore();

const date = moment(props.createdAt).format("MMM Do, YYYY");
</script>

<style lang="scss" scoped>
article {
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
}

header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--grey-100);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  h5 {
    letter-spacing: 0;
  }
}
.main-icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background: var(--primary-500);
  border-radius: var(--borderRadius);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
  margin-right: 2rem;
}
.info {
  h5 {
    margin-bottom: 0.25rem;
  }
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }
}
.pending {
  background: #fcefc7;
  color: #e9b949;
}
.interview {
  background: #e0e8f9;
  color: #647acb;
}
.declined {
  color: #d66a6a;
  background: #ffeeee;
}
.content {
  padding: 1rem 1.5rem;
}
.content-center {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  }
}

.status {
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 0.5rem;
}
footer {
  margin-top: 1rem;
}
.edit-btn,
.delete-btn {
  letter-spacing: var(--letterSpacing);
  cursor: pointer;
  height: 30px;
}
.edit-btn {
  color: var(--green-dark);
  background: var(--green-light);
  margin-right: 0.5rem;
}
.delete-btn {
  color: var(--red-dark);
  background: var(--red-light);
}
// &:hover > .actions {
//   visibility: visible;
// }
</style>
