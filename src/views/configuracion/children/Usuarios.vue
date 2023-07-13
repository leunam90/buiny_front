<template>
  <div class="view">
   <h1 class="viewTitle">Usuarios</h1>
    <pre>{{ store.usersData }}</pre>
  </div>
</template>

<script setup>
import { useApiCallsStore } from '../../../stores/ApiCalls.js'
const store = useApiCallsStore()
store.fetchUsers()
</script>

<style scoped></style>