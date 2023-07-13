<template>
    <div class="w-full h-full flex flex-col items-center justify-center gap-2">
        <!-- <img src="../assets/404.png" alt=""> -->
        <img src="https://cdn.dribbble.com/users/1925067/screenshots/16439652/media/01a0ddd83ef13707193710594cd31f2d.gif" alt="" class="h-96">
        <h1 class="text-xl font-medium">Página no encontrada</h1>
        <router-link to="home" class="flex items-center justify-center bg-blue-200 text-blue-600 p-2 rounded-md gap-1 uppercase">
            <PhHouse :size="22" weight="duotone" class="flex-none" />
            <p class="text-xs font-medium">Regresar al inicio</p>
        </router-link>
    </div>
</template>
<script setup>
import { PhHouse } from "@phosphor-icons/vue"

</script>