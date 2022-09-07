import { defineStore } from 'pinia'

export const useBankingStore = defineStore({
  id: 'bank',
  state: () => ({
    users: {
      '1': {
        id: 1,
        name: 'ijoni victor',
        role: 'admin'
      },
      '2':{
        id: 2,
        name: 'victor ijoni',
        role: 'user',
        balance: '20000'
      }
    },
    transactions: {},
    currentUser: ''
  }),
  getters: {
    getCurrentUser: (state)=> state.currentUser
  },
  actions: {
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
    },
    setCurrentUser(value){ 
      this.currentUser = value.toString();
    }
  }
})
