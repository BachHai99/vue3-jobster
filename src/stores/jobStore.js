import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "@/utils/axios";
import { getUserFromLocalStorage } from "@/utils/localStorage";
// import { getAllJobs, hideLoading } from './allJobsStore.js'
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
    // jobTypeOptions.value = [
    //   "full-time",
    //   "part-time",
    //   "remote",
    //   "intership",
    // ];
    jobType.value = "full-time";
    // statusOptions.value = ["interview", "declined", "pending"];
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
    console.log(payload);
    company.value = payload.company;
    editJobId.value = payload.editJobId;
    jobLocation.value = payload.jobLocation;
    jobType.value = payload.jobType;
    position.value = payload.position;
    status.value = payload.status;
  };

  const createJob = async (job) => {
    console.log(job);
    try {
      console.log(job);
      isLoading.value = true;
      const resp = await customFetch.post("/jobs", job);
      isLoading.value = false;
      clearValues();
      console.log(resp.data);
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  };

  const deleteJob = async (jobId) => {
    try {
      console.log("call");
      const resp = await customFetch.delete(`/jobs/${jobId}`);
      console.log("delete");
      storeAllJobs.getAllJobs();
      console.log(resp.data.msg);
    } catch (error) {
      storeAllJobs.hideLoading();
      console.log(error);
    }
  };

  const editJob = async ({ jobId, job }) => {
    try {
      isLoading.value = true;
      const resp = await customFetch.patch(`/jobs/${jobId}`, job);
      isLoading.value = false;
      console.log(resp);
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
