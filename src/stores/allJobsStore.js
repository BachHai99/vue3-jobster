import { defineStore } from "pinia";
// import { ref, isProxy, toRaw } from "vue";
import { ref } from "vue";
import customFetch from "@/utils/axios";

export const allJobsStore = defineStore("allJobs", () => {
  const search = ref("");
  const searchStatus = ref("all");
  const searchType = ref("all");
  const sort = ref("latest");
  const sortOptions = ref(["latest", "oldest", "a-z", "z-a"]);

  const isLoading = ref(true);
  const jobs = ref([]);
  const totalJobs = ref(0);
  const numOfPages = ref(1);
  const page = ref(1);
  const stats = ref({});
  const monthlyApplications = ref([]);

  const showLoading = () => {
    isLoading.value = true;
  };

  const hideLoading = () => {
    isLoading.value = false;
  };

  const handleChange = () => {};

  const clearFilters = () => {
    search.value = "";
    searchStatus.value = "all";
    searchType.value = "all";
    sort.value = "latest";
    sortOptions.value = ["latest", "oldest", "a-z", "z-a"];
  };

  const getAllJobs = async () => {
    let url = `/jobs?status=${searchStatus.value}&jobType=${searchType.value}&sort=${sort.value}&page=${page.value}`;
    if (search.value) {
      url += `&search=${search.value}`;
    }
    try {
      isLoading.value = true;
      const resp = await customFetch.get(url);
      isLoading.value = false;
      jobs.value = resp.data.jobs;
      numOfPages.value = resp.data.numOfPages;
      totalJobs.value = resp.data.totalJobs;
      console.log(resp.data);
    } catch (error) {
      isLoading.value = false;
      console.log(error);
    }
  };

  const clearAllJobsState = () => {
    search.value = "";
    searchStatus.value = "all";
    searchType.value = "all";
    sort.value = "latest";
    sortOptions.value = ["latest", "oldest", "a-z", "z-a"];
    isLoading.value = true;
    jobs.value = [];
    totalJobs.value = 0;
    numOfPages.value = 1;
    page.value = 1;
    stats.value = {};
    monthlyApplications.value = [];
  };

  const showStats = async () => {
    try {
      const resp = await customFetch.get("/jobs/stats");
      monthlyApplications.value = resp.data.monthlyApplications;
      stats.value = resp.data.defaultStats;
      console.log(resp.data.defaultStats);
      console.log(resp.data.monthlyApplications);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    isLoading,
    jobs,
    totalJobs,
    numOfPages,
    page,
    stats,
    monthlyApplications,
    showLoading,
    hideLoading,
    clearFilters,
    handleChange,
    getAllJobs,
    showStats,
    clearAllJobsState,
  };
});
