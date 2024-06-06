import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/about_us.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/contact_us.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../pages/pricing.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../pages/work.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../pages/blog.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
