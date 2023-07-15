<template>
  <div class="view">
    <h1 class="viewTitle">Usuarios</h1>
    <div class="flex flex-col items-start justify-center w-full">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full overflow-hidden  border-b border-slate-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-slate-200 bg-slate-100 text-left text-xs leading-4 font-medium text-slate-500 tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 border-b border-slate-200 bg-slate-100 text-left text-xs leading-4 font-medium text-slate-500 tracking-wider">
                  Title
                </th>
                <th class="px-6 py-3 border-b border-slate-200 bg-slate-100 text-left text-xs leading-4 font-medium text-slate-500 tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 border-b border-slate-200 bg-slate-100 text-left text-xs leading-4 font-medium text-slate-500 tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 border-b border-slate-200 bg-slate-100"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(user, index) in store.usersData" :key="index" class="hover:bg-slate-100">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-slate-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <div class="w-10 h-10 bg-blue-500 rounded-full flex-none text-white text-lg font-light flex items-center justify-center">
                        {{ user.employee.first_name.charAt(0) + user.employee.last_name.charAt(0) }}
                      </div>
                      <!-- <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> -->
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-slate-900">{{ user.employee.first_name + ' ' + user.employee.last_name }}</div>
                      <div class="text-sm leading-5 text-slate-500">{{ user.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-slate-200">
                  <div class="text-sm leading-5 text-slate-900">{{ user.employee.position }}</div>
                  <!-- <div class="text-sm leading-5 text-slate-500">Human Resources</div> -->
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-slate-200">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full " :class="user.is_enabled === 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                    {{ user.is_enabled === 1 ? 'Activo' : 'Inactivo' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-slate-200 text-sm leading-5 text-slate-500">
                  {{ user.roles[0] ? user.roles[0].name : '' }}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-slate-200 text-sm leading-5 font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Editar</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <pre>{{ store.usersData }}</pre> -->
  </div>
</template>

<script setup>
import { useApiCallsStore } from '../../../stores/ApiCalls.js'
const store = useApiCallsStore()
store.fetchUsers()
</script>

<style scoped></style>