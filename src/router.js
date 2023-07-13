import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { name: "login", path: "/", component: () => import("./views/Login.vue") },
  { name: "home", path: "/home", component: () => import("./views/Home.vue") },
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("./views/Dashboard.vue"),
  },
  {
    name: "gantt",
    path: "/gantt",
    component: () => import("./views/Gantt.vue"),
  },
  {
    name: "presupuesto",
    path: "/presupuesto",
    component: () => import("./views/Presupuesto.vue"),
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import("./views/Profile.vue"),
  },
  {
    name: "configuracion",
    path: "/configuracion",
    component: () => import("./views/configuracion/Configuracion.vue"),
    children: [
        {
            path: "usuarios",
            name: "usuarios",
            component: () => import("./views/Configuracion/children/Usuarios.vue"),
          },
          {
            path: "roles",
            name: "roles",
            component: () => import("./views/Configuracion/children/Roles.vue"),
          },
          {
            path: "posiciones",
            name: "posiciones",
            component: () => import("./views/Configuracion/children/Posiciones.vue"),
          },
          {
            path: "empleados",
            name: "empleados",
            component: () => import("./views/Configuracion/children/Empleados.vue"),
          },
          {
            path: "clientes",
            name: "clientes",
            component: () => import("./views/Configuracion/children/Clientes.vue"),
          },
    ],
  },
  {
    name: "Notfound",
    path: "/:pathName(.*)*",
    component: () => import("./views/Notfound.vue"),
  },
];

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
