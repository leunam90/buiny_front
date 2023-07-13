import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
    state: () => ({
        collapsed: true,
    }
    ),
    getters: {
        //   doubleCount: (state) => state.count * 2,
    },
    actions: {
        toggleNavbar() {
            this.collapsed = !this.collapsed
        },
    },
})