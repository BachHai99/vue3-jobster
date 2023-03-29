<template>
  <section>
    <form action="submit" class="form">
      <h3>{{ isEditing ? "edit job" : "add job" }}</h3>
      <!-- <input type="text" name="position" :value="position"> -->
      <!-- <input type="text" name="company" :value="company"> -->
      <!-- <input type="text" name="jobLocation" :value="jobLocation"> -->
      <div class="form-center">
        <!-- <form-row
          type="text"
          name="position"
          :value="position"
          @handleChange="handleJobInput"
        /> -->
        <input type="text" :value="position" />
        {{ position }}
        {{ company }}
        {{ jobLocation }}
        <form-row
          type="text"
          name="company"
          :value="company"
          @handleChange="handleJobInput"
        />
        <form-row
          type="text"
          name="JobLocation"
          :value="JobLocation"
          @handleChange="handleJobInput"
        />
        <form-row
          name="status"
          :value="status"
          :list="statusOptions"
          @handleChange="handleJobInput"
        />
        <form-row
          name="position"
          :value="jobType"
          :list="jobTypeOptions"
          @handleChange="handleJobInput"
        />
        <div class="btn-container">
          <button
            type="button"
            class="btn btn-block clear-btn"
            @click="storeJob.clearValues"
          >
            clear
          </button>
          <button
            type="button"
            class="btn btn-block submit-btn"
            @click="handleSubmit"
            :disabled="isLoading"
          >
            submit
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { jobStore } from "@/stores/jobStore";
import { userStore } from "@/stores/userStore";
import FormRow from "@/components/FormRow.vue";

const storeJob = jobStore();
const storeUser = userStore();
const {
  isLoading,
  position,
  company,
  jobLocation,
  jobType,
  jobTypeOptions,
  status,
  statusOptions,
  isEditing,
  editJobId,
} = storeToRefs(storeJob);
const { user } = storeToRefs(storeUser);

onMounted(() => {
  if (!isEditing) {
    storeJob.handleChange({
      name: "jobLocation",
      value: user.location,
    });
  }
});

const handleJobInput = () => {
  console.log("hello");
};

const handleSubmit = (e) => {
  console.log("submit");
  e.preventDefault();

  if (!position.value || !company.value || !jobLocation) {
    console.log("err");
  }
  if (isEditing) {
    storeJob.editJob({
      jobId: editJobId.value,
      job: { position, company, jobLocation, jobType, status },
    });
  }
};
</script>

<style lang="scss" scoped>
section {
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
}
h3 {
  margin-top: 0;
}
.form {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  max-width: 100%;
  width: 100%;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  row-gap: 0.5rem;
}
.form-center button {
  align-self: end;
  height: 35px;
  margin-top: 1rem;
}
.btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-self: flex-end;
  margin-top: 0.5rem;
  button {
    height: 35px;
  }
}
.clear-btn {
  background: var(--grey-500);
}
.clear-btn:hover {
  background: var(--black);
}
@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }
  .btn-container {
    margin-top: 0;
  }
}
@media (min-width: 1120px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .form-center button {
    margin-top: 0;
  }
}
</style>
