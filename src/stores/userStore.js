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
      console.log(resp);
      addUserToLocalStorage(resp.data.user);
      console.log(resp.data.user);
      // return resp.data
    } catch (error) {
      console.log("error");
      // console.log("login..." + getUserFromLocalStorage());
    }
  };

  const logoutUser = async () => {
    // try {
    //   const resp = await customFetch.post("/auth/login");
    // } catch (error) {}
    user.value = null;
    isSidebarOpen.value = false;
    removeUserFromLocalStorage();
  };

  const clearStore = async () => {
    try {
      console.log('clear store');
      logoutUser();
      storeAllJobs.clearAllJobsState();
      storeJob.clearValues();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();      
    }
  };

  return {
    isLoading,
    isSidebarOpen,
    user,
    toggleSidebar,
    loginUser,
    logoutUser,
    clearStore
  };
});
