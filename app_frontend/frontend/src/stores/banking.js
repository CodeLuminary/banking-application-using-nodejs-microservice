import { defineStore } from 'pinia'

export const useBankingStore = defineStore({
  id: 'bank',
  state: () => ({
    users: {
      '1': {
        _id: 1,
        name: 'ijoni victor',
        userRole: 'admin'
      },
      '2':{
        _id: 2,
        name: 'victor ijoni',
        userRole: 'user',
        balance: '20000'
      }
    },
    transactions: [],
    personal_transactions: [],
    currentUser: ''
  }),
  getters: {
    getCurrentUser: (state)=> state.currentUser
  },
  actions: {
    async getAllUsers(){
      return this.users;
    },
    async setUsers(){
      try{
        const response = await fetch('http://localhost:4000/users')
        const result = await response.json();
        if(result.isSuccessful) {
          const allUsers = {};
          for(let i = 0; i < result.data.length; i++){
            allUsers[result.data[i]._id] = result.data[i];
          }
          this.users = allUsers;
          console.log(result)
        }
        else console.log(result);
      }
      catch(error){
        console.log(error);
      }
    },
    setCurrentUser(value){ 
      this.currentUser = value.toString();
    },
    async getUserTransactions(){
      try{
        const response = await fetch('http://localhost:4000/transactions');
        const result = await response.json();
        if(result.isSuccessful){
            this.transactions = result.data;
            this.personal_transactions = result.data.filter(transaction=>transaction.from === this.currentUser)
        }
        else console.log(result);
      }
      catch(error){
        console.log(error);
      }
    }
  }
})
