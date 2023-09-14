// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Register",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/homepage",
    component: () => import("@/layouts/default/HomeDefault.vue"),
    children: [
      {
        path: "",
        name: "Homepage",
        component: () => import("@/views/UserList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
