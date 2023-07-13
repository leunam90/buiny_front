import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

{ name: 'Login', path: "/", component: () => import('./views/Login.vue') },
{ name: 'Home', path: "/home", component: () => import('./views/Home.vue') },
{ name: 'Dashboard', path: "/dashboard", component: () => import('./views/Dashboard.vue') },
{ name: 'Gantt', path: "/gantt", component: () => import('./views/Gantt.vue') },
{ name: 'Presupuesto', path: "/presupuesto", component: () => import('./views/Presupuesto.vue') },
{ name: 'Profile', path: "/profile", component: () => import('./views/Profile.vue') },
{ name: 'Configuracion', path: "/configuracion", component: () => import('./views/Configuracion/Configuracion.vue'), children:[
{ name: 'Usuarios', path: "", component: () => import('./views/configuracion/children/Usuarios.vue') },
    
] },
{ name: 'Notfound', path: "/:pathName(.*)", component: () => import('./views/Notfound.vue') },


];

const history = createWebHashHistory();

const router = createRouter({
history,
routes,
});

export default router;