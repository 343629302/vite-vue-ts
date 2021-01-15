import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: defineAsyncComponent(() => import("../pages/index.vue")),
  },
  {
    path: "/other",
    component: defineAsyncComponent(() => import("../pages/other.vue")),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
