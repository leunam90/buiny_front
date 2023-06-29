<template>
    <div class="w-full h-screen bg-ui-100 text-white flex items-center justify-start p-4 flex-col gap-8">
        <div class="p-2 rounded-lg bg-ui-200 flex flex-col gap-2 items-center">
            Home
            <hr class="border-ui-400 w-full">
            <button class="bg-ui-300 p-2 rounded-lg">Test</button>
        </div>
    </div>
</template>

<script setup>
import { useTestStore } from '../stores/test.js';
import { PhFeather, PhCube } from "@phosphor-icons/vue";
const store = useTestStore()

</script>

<style scoped></style>