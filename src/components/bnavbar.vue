<template>
    <div class="overflow-hidden transition-all duration-300 menu">
        <div class="w-9 h-9 flex items-center justify-center rounded-md text-blue-500 bg-slate-200/70 lcontainer">
            <Blogo class="h-4 flex-none lb" />
            <Buinylogo class="h-4 flex-none lfull hidden" />
        </div>
        <router-link to="home" class="menuitem">
            <PhHouse :size="22" weight="duotone" class="flex-none" />
            <p class="text-xs font-medium">Dashboard</p>
        </router-link>
        <router-link to="dashboard" class="menuitem">
            <PhChartLineUp :size="22" weight="duotone" class="flex-none" />
            <p class="text-xs font-medium">Dashboard</p>
        </router-link>
        <router-link to="gantt" class="menuitem">
            <PhAlignCenterVertical :size="22" weight="duotone" class="flex-none rotate-90" />
            <p class="text-xs font-medium">Gantt</p>
        </router-link>
        <router-link to="presupuesto" class="menuitem">
            <PhMoney :size="22" weight="duotone" class="flex-none" />
            <p class="text-xs font-medium">Presupuesto</p>
        </router-link>
        <router-link to="configuracion" class="menuitem">
            <PhSlidersHorizontal :size="22" weight="duotone" class="flex-none" />
            <p class="text-xs font-medium">Configuración</p>
        </router-link>
        <router-link to="profile" class="flex items-center justify-center w-full gap-2 p-2 rounded-md relative opacity-100 mt-auto">
            <div class="w-7 h-7 bg-blue-500 ring  text-white rounded-full flex-none text-xs flex items-center justify-center font-medium">
                <h1>EM</h1>
            </div>
            <p class="text-xs font-medium truncate">Eduardo Meneses</p>
        </router-link>




    </div>
</template>

<script setup>
import { PhHouse, PhChartLineUp, PhAlignCenterVertical, PhMoney, PhSlidersHorizontal } from "@phosphor-icons/vue"
import Blogo from './Blogo.vue'
import Buinylogo from './Buinylogo.vue'
</script>

<style scoped>
.menu {
    @apply w-12 h-full flex flex-col items-center justify-start cursor-pointer flex-none text-slate-400 transition-all duration-500 relative bg-white p-1 gap-2 border-r border-slate-100
}

.menu:hover {
    @apply w-48
}

.menu:hover .lb {
    @apply hidden
}

.menu:hover .lfull {
    @apply flex
}

.menu:hover .lcontainer {
    @apply w-full px-2 mr-auto bg-transparent
}

.menuitem {
    @apply flex items-center justify-center w-full gap-2 p-1 rounded-md relative opacity-100
}

.menuitem:hover {
    @apply bg-slate-200/60 text-blue-400
}

.menuitem p {
    display: none;
}

.menu:hover .menuitem p {
    display: flex;
}

.menu:hover .menuitem {
    @apply justify-start
}

.router-link-active {
    @apply text-blue-400
}
</style>