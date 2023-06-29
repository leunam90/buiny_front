import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    state: () => ({ 
      count: 0, 
      name: 'Eduardo Meneses',
      includes: ['Vue 3', 'Tailwind','Vue Router','Phosporicons','Pinia']
     }
      ),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })