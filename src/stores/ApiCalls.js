import { defineStore } from 'pinia'

export const useApiCallsStore = defineStore('apiCalls', {
  state: () => ({
    usersData: [], // Inicializado como un array vacío
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${accessToken}`);
      myHeaders.append('Cookie', `cookie_token=${accessToken}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      try {
        const response = await fetch(
          'http://buiny-api.suitestacks.com/api/users',
          requestOptions
        );
        const result = await response.json();
        this.usersData = result;
      } catch (error) {
        console.log('error', error);
      }
    },
  },
});
