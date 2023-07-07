import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

{ name: 'Login', path: "/", component: () => import('./views/Login.vue') },
{ name: 'Home', path: "/home", component: () => import('./views/Home.vue') },

];

const history = createWebHashHistory();

const router = createRouter({
history,
routes,
});

export default router;