<template>
    <div class="view">
        <h1>Bienvenido</h1>
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