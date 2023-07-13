<template>
  <div class="view">
    Listado de usuarios
    <pre>{{ store.usersData }}</pre>
  </div>
</template>

<script setup>
import { useApiCallsStore } from '../../../stores/ApiCalls.js'
const store = useApiCallsStore()
store.fetchUsers()
</script>

<style scoped></style>