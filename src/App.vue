<template>
  <main class="flex items-start justify-start h-screen p-1 gap-0 overflow-hidden bg-slate-50 relative">
    <bnavbar v-if="show"/>
    <router-view />
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, watch, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Bnavbar from './components/bnavbar.vue';

const show = ref(false)


const router = useRouter();
const route = useRoute();
watch(() => route.path, (newPath, oldPath) => {
  console.log('Ruta actual:', newPath);
  if (newPath !== '/') {
    show.value = true
  }
  // Aquí puedes realizar acciones adicionales cuando la ruta cambia
});

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
