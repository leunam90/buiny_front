<template>
    <div :class="'state' + menuState" class="overflow-hidden transition-all duration-300 ">
        <div @click="updateState" class="w-10 h-10 flex items-center justify-center rounded-xl">
            <ph-squares-four :size="20" weight="fill" class="hover:rotate-45" />
        </div>
        {{ menuState }}
        <div class="menuitem flex items-center justify-center gap-2 px-2 flex-none w-full h-8 bg-slate-100 hover:bg-slate-200 rounded">
            <ph-user :size="18" weight="regular" class="flex-none" />
            <p class="text-xs font-medium">Usuarios</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { PhSquaresFour, PhUser } from "@phosphor-icons/vue"

const menuState = ref(1)

const updateState = () => {
    if (menuState.value === 2) {
        menuState.value = 1
    } else {
        menuState.value++
    }
}

</script>

<style scoped>
.state1 {
    @apply w-10 h-10 flex flex-col items-center justify-start pt-2.5 gap-5 cursor-pointer flex-none text-slate-500 bg-slate-200 rounded-full absolute top-2 left-2 z-50 transition-all duration-500
}

.state1:hover {
    @apply text-slate-700
}

.state2 {
    @apply w-8 h-full flex flex-col items-center justify-start cursor-pointer flex-none text-slate-500 transition-all duration-500 relative
}

.state2:hover {
    @apply w-32
}

.menuitem p {
    display: none;
}

.state2:hover .menuitem p {
    display: flex;
}
</style>