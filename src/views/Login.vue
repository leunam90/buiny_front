<template>
    <div class="contenedor fcicjc bg-ui-100 text-white">
        <div class="card flex-col w-72 fcicjc mt-auto">
            <div class="fcicjc gap-2 opacity-20 relative">
                <img src="../assets/logo2.svg" class="w-36" alt="logo">
                <h1 class="font-bold mb-1">Buiny</h1>
            </div>
            <hr class="hr">

            <div class="relative w-full">
                <input autocomplete="none" v-model="email" type="text" id="user" class="block px-2.5 pb-3 pt-3 w-full text-xs text-ui-400 bg-transparent rounded-lg border-1 border-ui-500/10 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                <label for="user" class="absolute flex items-center justify-start gap-2 text-xs text-ui-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-ui-200  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    <PhEnvelope :size="12" weight="bold" />
                    Email
                </label>
            </div>
            <div class="relative w-full">
                <input autocomplete="none" readonly onfocus="this.removeAttribute('readonly');" v-model="password" type="password" id="password" class="block px-2.5 pb-3 pt-3 w-full text-xs text-ui-400 bg-transparent rounded-lg border-1 border-ui-500/10 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                <label for="password" class="absolute flex items-center justify-start gap-2 text-xs text-ui-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-ui-200  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    <ph-Lock :size="12" weight="bold" />
                    Contraseña</label>
            </div>

            <button @click="login" class="btn btn-prim w-full p-3">Entrar</button>
            <button class="btn btn-ghost w-full p-1 opacity-30 hover:opacity-80">Olvidé mi contraseña</button>
            <div v-if="errorMessage" class="bg-red-500/40 text-red-500/80 px-2 rounded py-1 text-xs">
                {{ errorMessage }}
            </div>
        </div>
        <div class="ffricjs gap-1 mt-auto opacity-30 hover:opacity-100">
            <p>Desarrollado por</p>
            <a href="www.suitestacks.com" class="ffricjs gap-1 hover:text-blue-500 hover:opacity-100">
                <svg id="Capa_2" data-name="Capa 2" class="w-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.71 223.46">
                    <g id="Capa_1-2" data-name="Capa 1">
                        <g>
                            <g class="cls-2 ">
                                <path fill="currentColor" class="cls-1" d="M97.85,223.46c-2.31,0-4.61-.6-6.67-1.79L6.59,172.45c-4.06-2.37-6.59-6.76-6.59-11.46V62.46c0-4.7,2.53-9.09,6.59-11.46L91.19,1.79c4.12-2.39,9.22-2.39,13.33,0l84.6,49.21c4.06,2.36,6.59,6.76,6.59,11.46v22.37c0,2.8-2.27,5.08-5.08,5.08s-5.08-2.27-5.08-5.08v-22.37c0-1.1-.59-2.13-1.54-2.68L99.41,10.57c-.96-.56-2.16-.56-3.12,0L11.7,59.78c-.95,.55-1.54,1.58-1.54,2.68v98.53c0,1.1,.59,2.13,1.54,2.68l84.6,49.21c.96,.56,2.16,.56,3.12,0l84.59-49.21c.95-.55,1.54-1.58,1.54-2.68v-22.19c0-2.8,2.27-5.08,5.08-5.08s5.08,2.27,5.08,5.08v22.19c0,4.7-2.53,9.1-6.59,11.46l-84.59,49.21c-2.06,1.2-4.36,1.79-6.67,1.79Z" />
                            </g>
                            <path class="pat1" fill="currentColor" d="M62.59,97.92c0-3.92,2.1-7.59,5.49-9.57l30.35-17.73v-24.08c0-5.16-4.2-9.35-9.36-9.35-1.63,0-3.26,.44-4.7,1.29l-48.37,28.26c-2.85,1.67-4.63,4.76-4.63,8.07v55.88c0,5.16,4.2,9.35,9.35,9.35h0c1.62,0,3.23-.44,4.66-1.26l17.2-9.93v-30.92Z" />
                            <path class="pat2" fill="currentColor" d="M154.97,85.17c-1.28,0-2.59,.33-3.82,1.05l-48.37,28.26c-2.33,1.36-3.77,3.86-3.77,6.57v55.88c0,4.44,3.64,7.61,7.62,7.61,1.27,0,2.56-.32,3.79-1.03l48.37-27.93c2.35-1.36,3.8-3.87,3.8-6.58v-56.21c0-4.44-3.65-7.61-7.62-7.61Z" />
                            <path class="pat3" fill="currentColor" d="M122.03,62.05c-1.28,0-2.59,.33-3.82,1.05l-48.37,28.26c-2.33,1.36-3.77,3.86-3.77,6.57v55.88c0,4.44,3.64,7.61,7.62,7.61,1.27,0,2.57-.32,3.79-1.03l18.07-10.43v-28.91c0-3.92,2.1-7.59,5.49-9.57l28.61-16.72v-25.1c0-4.44-3.65-7.62-7.62-7.62Z" />
                        </g>
                    </g>
                </svg>
                SuiteStacks
            </a>
        </div>
    </div>
</template>

<script setup>
import { useTestStore } from '../stores/test.js'
import { PhUser, PhLock, PhEnvelope } from "@phosphor-icons/vue"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useTestStore()

// Datos del formulario de inicio de sesión
const email = ref('')
const password = ref('')
const error = ref(true)
const errorMessage = ref('')

const login = async () => {
    try {
        const myHeaders = new Headers()
        myHeaders.append("Accept", "application/json")
        myHeaders.append("Content-Type", "application/json")
        // myHeaders.append("Cookie", "cookie_token=19%7Cc1GQIpo2Hbe4FvK5ScfD3JIDZtUEjECF55kuGBug")

        const raw = JSON.stringify({
            "email": email.value,
            "password": password.value
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        const response = await fetch("http://buiny-api.suitestacks.com/api/login", requestOptions)
        const data = await response.json()

        if (response.ok) {
            // Inicio de sesión exitoso, guarda el access_token en localStorage
            localStorage.setItem('access_token', data.access_token)
            errorMessage.value = ''
            router.push({ path: '/home' })
        } else {
            // Mostrar el mensaje de error devuelto por la API
            console.error(data.message)
            errorMessage.value = data.message
        }
    } catch (error) {
        console.error(error)
    }
}

</script>

<style scoped>
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff00 inset;
    background-color: #ffffff00;
    -webkit-background-color: #FAFFBD !important;
    background-image: none !important;
    color: #ff0000 !important;
}
</style>