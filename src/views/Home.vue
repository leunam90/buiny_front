<template>
    <div class="contenedor">
        <div class="card flex-col w-44">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <p>p Lorem.</p>
            <hr class="hr">
            <button class="btn btn-base w-full">boton base</button>
            <button class="btn btn-ghost w-full">boton ghost</button>
            <button class="btn btn-prim w-full">boton prim</button>
        </div>
    </div>
</template>

<script setup>
import { useTestStore } from '../stores/test.js';
import { PhFeather, PhCube } from "@phosphor-icons/vue";
const store = useTestStore()

</script>

<style scoped></style>