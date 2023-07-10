<template>
    <div class="relative w-full">
        <input autocomplete="none" v-model="inputValue" type="text" :id="inputId" class="block px-2.5 pb-3 pt-3 w-full text-xs text-white bg-transparent rounded-lg border-1 border-ui-500/10 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
        <label :for="inputId" class="absolute flex items-center justify-start gap-2 text-xs text-ui-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] rounded px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-6 left-1">
            
            {{labelText}}
        </label>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const props = defineProps({
  inputId: {
    type: String,
    required: true,
  },
  labelText: {
    type: String,
    default: 'inputValue',
  },
})

const inputValue = ref('')

// Emite el valor del input mediante un evento personalizado llamado 'input'
const emitValue = (value) => {
    inputValue.value = value;
    emit('input', value)
};
</script>
  