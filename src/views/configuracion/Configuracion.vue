<template>
    <div class="w-full h-screen flex flex-row items-start justify-start">
        <div class="overflow-hidden transition-all duration-300 menu">

            <router-link to="/configuracion/usuarios" class="menuitem">
                <PhUsers :size="22" weight="duotone" class="flex-none" />
                <p class="text-xs font-medium">Usuarios</p>
            </router-link>
            <router-link to="/configuracion/roles" class="menuitem">
                <PhUserSwitch :size="22" weight="duotone" class="flex-none" />
                <p class="text-xs font-medium">Roles</p>
            </router-link>
            <router-link to="/configuracion/posiciones" class="menuitem">
                <PhUsersThree :size="22" weight="duotone" class="flex-none" />
                <p class="text-xs font-medium">Posiciones</p>
            </router-link>
            <router-link to="/configuracion/empleados" class="menuitem">
                <PhUserFocus :size="22" weight="duotone" class="flex-none" />
                <p class="text-xs font-medium">Empleados</p>
            </router-link>
            <router-link to="/configuracion/clientes" class="menuitem">
                <PhUserList :size="22" weight="duotone" class="flex-none" />
                <p class="text-xs font-medium">Clientes</p>
            </router-link>


        </div>
        <router-view />
    </div>
</template>

<script setup>
import { PhUsers, PhUserSwitch, PhUsersThree, PhUserFocus, PhUserList } from "@phosphor-icons/vue"

</script>

<style scoped>
.menu {
    @apply w-48 bg-slate-100 h-screen flex flex-col items-center justify-start cursor-pointer flex-none text-slate-400 transition-all duration-500 relative p-1 gap-2 border-r border-slate-100
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
    @apply flex items-center justify-start w-full gap-2 py-1 px-2 rounded-md relative opacity-100
}

.menuitem:hover {
    @apply bg-slate-200/60 text-blue-400
}

.router-link-active {
    @apply text-blue-400
}
</style>