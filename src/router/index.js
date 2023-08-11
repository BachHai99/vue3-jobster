import { createRouter, createWebHistory } from "vue-router";
// import Router from 'vue-router'
// import Vue from 'vue'

import Landing from "@/pages/Landing.vue";
import Register from "@/pages/Register.vue";
import AllJobs from "@/pages/dashboard/AllJobs.vue";
import AdddJob from "@/pages/dashboard/AddJob.vue";
import Stats from "@/pages/dashboard/Stats.vue";
import Profile from '@/pages/dashboard/Profile.vue'
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
    path: "/",
    name: "Stats",
    component: Stats,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
  // {
  //   path: "/navbar",
  //   name: "Navbar",
  //   component: Navbar,
  // },
];

// const router = new Router({
//   routes: [
//     {
//       path: "/all-jobs",
//       name: "All Jobs",
//       component: AllJobs,
//       beforeEnter(to, from, next) {
//         console.log(to, from, next);
//       }
//     },
//     {
//       path: "/add-job",
//       name: "Add Job",
//       component: AdddJob,
//     },
//     {
//       path: "/landing",
//       name: "Landing",
//       component: Landing,
//     },
//     {
//       path: "/register",
//       name: "Register",
//       component: Register,
//     },
//     {
//       path: "/hello",
//       name: "Hello",
//       component: HelloWorld,
//     },
//     {
//       path: "/",
//       name: "Stats",
//       component: Stats,
//     },
//     {
//       path: '/profile',
//       name: 'Profile',
//       component: Profile
//     }
//     // {
//     //   path: "/navbar",
//     //   name: "Navbar",
//     //   component: Navbar,
//     // },
//   ]
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
// const router = createRouter({
//   history: createWebHistory(),
//   routes : [
//     {
//       path: "/all-jobs",
//       name: "All Jobs",
//       component: AllJobs,
//       meta: {
//         isAuth: true
//       }
//     },
//     {
//       path: "/add-job",
//       name: "Add Job",
//       component: AdddJob,
//     },
//     {
//       path: "/landing",
//       name: "Landing",
//       component: Landing,
//     },
//     {
//       path: "/register",
//       name: "Register",
//       component: Register,
//     },
//     {
//       path: "/hello",
//       name: "Hello",
//       component: HelloWorld,
//     },
//     {
//       path: "/",
//       name: "Stats",
//       component: Stats,
//     },
//     {
//       path: '/profile',
//       name: 'Profile',
//       component: Profile
//     }
//     // {
//     //   path: "/navbar",
//     //   name: "Navbar",
//     //   component: Navbar,
//     // },
//   ]
// })

// router.beforeEach((to, from, next) => {
//   console.log('router');
//   console.log(to, from);
//   console.log(next);
// })

// export default router
