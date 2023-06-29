import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

{ name: 'Home', path: "/", component: () => import('./views/Home.vue') },

];

const history = createWebHashHistory();

const router = createRouter({
history,
routes,
});

export default router;