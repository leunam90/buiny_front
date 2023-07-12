<template>
    <div class="contenedor fcicjc bg-slate-50 text-slate-800">
        <h1>Home</h1>
        <BInput v-model="inputValue" inputId="myInput" labelText="Input Label" />
        <h1>o {{ inputValue }} o</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BInput from '../components/bInput.vue';

const inputValue = ref('')

</script>

<style scoped></style>