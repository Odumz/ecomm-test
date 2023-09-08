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
        path : 'auth',
        name: 'Auth',
        meta: { requiresAuth: false },
        children: [
          // {
          //   path: 'login',
          //   name: 'Login',
          //   component: () => import('../views/auth/login.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'signup-as-an-applicant',
          //   name: 'Register',
          //   component: () => import('../views/auth/register.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'confirm-mail',
          //   name: 'ConfirmMail',
          //   component: () => import('../views/auth/confirmMail.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'signup-as-a-recruiter',
          //   name: 'RegisterRecruiter',
          //   component: () => import('../views/auth/register.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'forgot-password',
          //   name: 'ForgotPassword',
          //   component: () => import('../views/auth/forgotPassword.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'reset-password',
          //   name: 'ResetPassword',
          //   component: () => import('../views/auth/resetPassword.vue'),
          //   meta: { requiresAuth: false },
          // },
          // {
          //   path: 'thank-you',
          //   name: 'Thanks',
          //   component: () => import('../views/auth/thankYou.vue'),
          //   meta: { requiresAuth: false },
          // },
        ]
      },
      {
        path : 'dashboard',
        name: 'Dashboard',
        meta: { requiresAuth: true },
        children: [
          // {
          //   path: '',
          //   name: 'Dashboard',
          //   component: () => import('../views/dashboard/index.vue'),
          //   meta: { requiresAuth: true },
          // },
          // {
          //   path: 'jobs',
          //   name: 'Job',
          //   children: [
          //     {
          //       path: '',
          //       name: 'Jobs',
          //       component: () => import('../views/dashboard/jobs/index.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     {
          //       path: 'view',
          //       name: 'ViewJob',
          //       component: () => import('../views/dashboard/jobs/view.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     // {
          //     //   path: 'job-openings',
          //     //   name: 'JobOpenings',
          //     //   component: () => import('../views/dashboard/jobs/jobOpening.vue'),
          //     //   meta: { requiresAuth: true },
          //     // },
          //     // {
          //     //   path: 'job-openings/view',
          //     //   name: 'ViewJobOpenings',
          //     //   component: () => import('../views/dashboard/jobs/jobOpening.vue'),
          //     //   meta: { requiresAuth: true },
          //     // },
          //   ]
          // },
          // {
          //   path: 'profile',
          //   name: 'Profile',
          //   component: () => import('../views/dashboard/profile/index.vue'),
          //   meta: { requiresAuth: true },
          // },
          // {
          //   path: 'reports',
          //   name: 'Report',
          //   children: [
          //     {
          //       path: '',
          //       name: 'Reports',
          //       component: () => import('../views/dashboard/report/index.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     {
          //       path: 'view',
          //       name: 'ViewReport',
          //       component: () => import('../views/dashboard/report/view.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     {
          //       path: 'job-openings',
          //       name: 'JobOpenings',
          //       component: () => import('../views/dashboard/report/jobOpening.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     {
          //       path: 'job-openings/view',
          //       name: 'ViewJobOpenings',
          //       component: () => import('../views/dashboard/report/jobOpening.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //   ]
          // },
          // {
          //   path: 'referrals',
          //   name: 'Referral',
          //   children: [
          //     {
          //       path: '',
          //       name: 'Referrals',
          //       component: () => import('../views/dashboard/referrals/index.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //     {
          //       path: 'view',
          //       name: 'ViewReferral',
          //       component: () => import('../views/dashboard/referrals/view.vue'),
          //       meta: { requiresAuth: true },
          //     },
          //   ]
          // },
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
