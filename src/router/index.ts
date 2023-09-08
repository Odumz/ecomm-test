import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
// import { basicRoutes } from "./routes";
import NProgress from "../config/nprogress";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'Landing',
        component: () => import('../views/Landing.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: '/product',
        name: 'Product',
        children: [
          {
            path: 'details',
            name: 'ProductDetails',
            component: () => import('../views/Products/Details.vue'),
            // meta: { requiresAuth: false },
          },
        ]
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('../views/errorPage.vue'),
    meta: { requiresAuth: false },
  },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes as unknown as RouteRecordRaw[],
    strict: true,
    // When switching pages, scroll to the top
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });

  // Injection Progress
  router.beforeEach((to) => {
    if (!NProgress.isStarted()) {
      NProgress.start();
    }
  });

  router.afterEach(() => {
    NProgress.done();
  });
