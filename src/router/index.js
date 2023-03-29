import { createRouter } from "vue-router";

import Landing from "@/pages/Landing.vue";
import Register from "@/pages/Register.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import AllJobs from "@/pages/dashboard/AllJobs.vue";
import AdddJob from "@/pages/dashboard/AddJob.vue";
import Stats from "@/pages/dashboard/Stats.vue";
// import Navbar from "@/components/Navbar.vue";

const routes = [
  {
    path: "/all-jobs",
    name: "All Jobs",
    component: AllJobs,
  },
  {
    path: "/add-job",
    name: "Add Job",
    component: AdddJob,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/hello",
    name: "Hello",
    component: HelloWorld,
  },
  {
    path: "/",
    name: "Stats",
    component: Stats,
  },
  // {
  //   path: "/navbar",
  //   name: "Navbar",
  //   component: Navbar,
  // },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
