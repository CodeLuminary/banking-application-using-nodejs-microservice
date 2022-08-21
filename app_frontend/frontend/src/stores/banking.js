import { defineStore } from 'pinia'

export const useBankingStore = defineStore({
  id: 'bank',
  state: () => ({
    users: {
      '1': {
        id: 1,
        name: 'ijoni victor'
      }
    },
    transactions: {}
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },

    async getAllUsers(){
      return this.users;
    },
    async getUserTransactions(){
      try{
        const response = await fetch('/users')
        const data = await response.json();
        if(data.isSuccessful) this.users = data.users;
        else console.log(data)
      }
      catch(error){
        console.log(error)
      }
    }
  }
})
