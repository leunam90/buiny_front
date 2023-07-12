<template>
    <div class="contenedor fcicjc bg-slate-50">
        <div class="card flex-col w-72 fcicjc mt-auto">
            <div class="fcicjc gap-2 relative">
                <img src="../assets/logo1.svg" class="w-36 opacity-50" alt="logo">
                <img src="../assets/BUINY2.svg" class="w-16 opacity-50" alt="logo">
            </div>
            <hr class="hr">

            <form action="" class="w-full gap-2 flex flex-col items-center justify-start">
                <div class="relative w-full">
                    <input autocomplete="none" v-model="email" type="text" id="user" class="inputcard peer" placeholder=" " />
                    <label for="user" class="labelinputcard peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        <PhEnvelope :size="12" weight="bold" />
                        Email
                    </label>
                </div>
                <div class="relative w-full">
                    <input autocomplete="none" v-model="password" type="password" id="password" class="inputcard peer" placeholder=" " />
                    <label for="password" class="labelinputcard peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        <ph-Lock :size="12" weight="bold" />
                        Contraseña</label>
                </div>
                <button @click="login" class="btn btn-prim w-full p-3">Entrar</button>
            </form>

            <button class="btn btn-ghost w-full p-1 opacity-30 hover:opacity-80">Olvidé mi contraseña</button>
            <div v-if="errorMessage" class="bg-red-200 text-red-500 px-2 rounded py-1 text-xs">
                {{ errorMessage }}
            </div>
        </div>
        <div class="ffricjs gap-1 mt-auto opacity-30 hover:opacity-100">
            <p>Desarrollado por</p>
            <a href="www.suitestacks.com" class="ffricjs gap-1 hover:text-blue-500 hover:opacity-100">
                <Sslogo />
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
import Sslogo from '../components/Sslogo.vue'
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