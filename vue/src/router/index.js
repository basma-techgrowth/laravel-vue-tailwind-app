import { createRouter, createWebHistory } from "vue-router";
import AuthLayout from "../components/AuthLayout.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import store from "../store";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Shop from "../views/Shop.vue";
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: "Dashboard", component: Dashboard },
      {
        path: '/shop',
        name: 'Shop',
        component: Shop
      }
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: { isUser: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
// redirects user back to login if auth is null
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' });
  } else if (store.state.user.token && (to.meta.isUser)) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
})

export default router;