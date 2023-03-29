import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { userStore } from '@/stores/userStore';

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit"
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error) => {
  if (error.response.status === 401) {
    userStore.clearStore();
    return
  }
}

export default customFetch;
