<template>
  <router-view />
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const clearAccessToken = () => {
  localStorage.removeItem('access_token');
};

onBeforeUnmount(() => {
  clearAccessToken();
});

onMounted(() => {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken && router.currentRoute.value.path !== '/') {
    router.push({ path: '/' });
    return;
  }
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token');

  if (to.path !== '/' && !accessToken) {
    console.log('Intento de acceso no autorizado');

    if (to.path !== '/') {
      // Si la ruta no es / y no hay token, redirige a /
      next({ path: '/' });
    } else {
      // Permitir el acceso a la ruta / sin un token de sesión
      next();
    }
  } else {
    // Permitir el acceso a todas las demás rutas con un token de sesión
    next();
  }
});
</script>
