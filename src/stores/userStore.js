import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "@/utils/axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "@/utils/localStorage";
import { allJobsStore } from "./allJobsStore";
import { jobStore } from "./jobStore";

export const userStore = defineStore("user", () => {
  const isLoading = ref(false);
  const isSidebarOpen = ref(false);
  const user = ref(getUserFromLocalStorage());

  const storeAllJobs = allJobsStore();
  const storeJob = jobStore();

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const loginUser = async (payload) => {
    try {
      const resp = await customFetch.post("/auth/login", payload);
      user.value = resp.data.user;
      addUserToLocalStorage(resp.data.user);
    } catch (error) {
      console.log("error");
    }
  };

  const logoutUser = async () => {
    user.value = null;
    isSidebarOpen.value = false;
    removeUserFromLocalStorage();
  };

  const clearStore = async () => {
    try {
      logoutUser();
      storeAllJobs.clearAllJobsState();
      storeJob.clearValues();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  const updateUser = async (user) => {
    try {
      isLoading.value = true;
      const resp = await customFetch.patch('/auth/updateUser', user)
      isLoading.value = false;
      user.value = resp.data.user;
      addUserToLocalStorage(user.value);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    isLoading,
    isSidebarOpen,
    user,
    toggleSidebar,
    loginUser,
    logoutUser,
    clearStore,
    updateUser
  };
});
