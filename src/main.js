import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import { createWebHistory } from "vue-router";
import Unicon from "vue-unicons";
// import VueI18n from 'vue-i18next'
import i18n from "@/locale/i18n";
import Vue3Toastify from "vue3-toastify";
import {
  uniLocationArrow,
  uniCalendarAlt,
  uniBriefcaseAlt,
  uniBriefcase,
  uniFileCheck,
  uniBug,
  uniUserCircle,
  uniAngleDown,
  uniChartGrowth,
  uniAnalysis,
  uniChart,
  uniUserSquare,
  uniAlignLeft,
  uniAngleDoubleLeft,
  uniAngleDoubleRight
} from "vue-unicons/dist/icons";
import createRouter from "@/router/index.js";

const store = createPinia();
const router = createRouter(createWebHistory());
Unicon.add([
  uniLocationArrow,
  uniCalendarAlt,
  uniBriefcaseAlt,
  uniBriefcase,
  uniFileCheck,
  uniBug,
  uniUserCircle,
  uniAngleDown,
  uniChartGrowth,
  uniAnalysis,
  uniChart,
  uniUserSquare,
  uniAlignLeft,
  uniAngleDoubleLeft,
  uniAngleDoubleRight
]);

i18n(
  createApp(App)
    .use(Vue3Toastify, {
      autoClose: 2000,
      style: {
        opacity: "1",
        userSelect: "initial",
      },
    })
    .use(router)
    .use(store)
    .use(Unicon)
).mount("#app");
