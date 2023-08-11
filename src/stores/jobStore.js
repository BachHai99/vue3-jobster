import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "@/utils/axios";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import { allJobsStore } from "@/stores/allJobsStore";

export const jobStore = defineStore("job", () => {
  const isLoading = ref(false);
  const position = ref("");
  const company = ref("");
  const jobLocation = ref("");
  const jobTypeOptions = ref(["full-time", "part-time", "remote", "internship"]);
  const jobType = ref("full-time");
  const statusOptions = ref(["interview", "declined", "pending"]);
  const status = ref("pending");
  const isEditing = ref(false);
  const editJobId = ref("");

  const storeAllJobs = allJobsStore();

  const clearValues = () => {
    isLoading.value = false;
    position.value = "";
    company.value = "";
    jobLocation.value = getUserFromLocalStorage()?.location || "";
    jobType.value = "full-time";
    status.value = "pending";
    isEditing.value = false;
    editJobId.value = "";
  };

  const handleChange = ({ name, value }) => {
    console.log(jobLocation.value, value, name);
    jobLocation.value = value;
  };

  const setEditJob = (payload) => {
    isEditing.value = true;
    company.value = payload.company;
    editJobId.value = payload.editJobId;
    jobLocation.value = payload.jobLocation;
    jobType.value = payload.jobType;
    position.value = payload.position;
    status.value = payload.status;
  };

  const createJob = async (job) => {
    try {
      isLoading.value = true;
      await customFetch.post("/jobs", job);
      isLoading.value = false;
      clearValues();
    } catch (error) {
      isLoading.value = false;
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await customFetch.delete(`/jobs/${jobId}`);
      storeAllJobs.getAllJobs();
    } catch (error) {
      storeAllJobs.hideLoading();
    }
  };

  const editJob = async ({ jobId, job }) => {
    try {
      isLoading.value = true;
      await customFetch.patch(`/jobs/${jobId}`, job);
      isLoading.value = false;
      clearValues();
    } catch (error) {
      console.log(error);
    }
  };

  return {
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
    clearValues,
    handleChange,
    setEditJob,
    createJob,
    deleteJob,
    editJob,
  };
});
