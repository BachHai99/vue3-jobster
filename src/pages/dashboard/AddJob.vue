<template>
  <section>
    <form action="submit" class="form">
      <h3>{{ isEditing ? "edit job" : "add job" }}</h3>
      <div class="form-center">
        <!-- position -->
        <form-row
          type="text"
          name="position"
          v-model="position"
        />
        <!-- company -->
        <form-row
          type="text"
          name="company"
          v-model="company"
        />
        <!-- job-location -->
        <form-row
          type="text"
          name="jobLocation"
          labelText='job location'
          v-model="jobLocation"
        />
        <!-- status -->
        <form-row-select
          name="status"
          v-model="status"
          :list="statusOptions"
        />
        <!-- job-type -->
        <form-row-select
          name="jobType"
          labelText='job type'
          v-model="jobType"
          :list="jobTypeOptions"
        />
       
        <div class="btn-container">
          <button type="button" class="btn btn-block clear-btn" @click="storeJob.clearValues()">
            clear
          </button>
          <button type="button" class="btn btn-block submit-btn" @click="handleSubmit" :disabled="isLoading">
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
import FormRowSelect from "@/components/FormRowSelect.vue";
import { toast } from "vue3-toastify";

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
  if (!isEditing.value) {
    storeJob.handleChange({
      name: "jobLocation",
      value: user.value.location,
    });
  }
});

const handleSubmit = (e) => {
  e.preventDefault();

  if (!position.value || !company.value || !jobLocation) { 
    console.log("err");
  }
  if (isEditing.value) {
    storeJob.editJob({
      jobId: editJobId.value,
      job: { position: position.value, company: company.value, jobLocation: jobLocation.value, jobType: jobType.value, status: status.value },
    });
    toast.success("Edit job success!")
    return;
  }
  storeJob.createJob({
    position: position.value, company: company.value, jobLocation: jobLocation.value, jobType: jobType.value, status: status.value
  })
  toast.success("Create job success!")
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
