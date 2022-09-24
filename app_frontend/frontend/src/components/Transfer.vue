<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();

    import {ref} from "vue";
    const isMake = ref(false);
    const toUser = ref('');
    const amount = ref('');

    function setMenu(state){
        isMake.value = state
    }

    function sendMoney(){
        const obj = {
            from: banking.currentUser,
            to: toUser.value,
            amount: amount.value
        }

        fetch('http://localhost:4000/users/transfer',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            alert("Successful");
        })
        .catch(error=>{
            console.log(error)
        })
    }
</script>
<template>
    <div>
        <div class="ta-header col-12">
            <h1>
                ACCOUNT            
            </h1>
            <p>
                Manage account here           
            </p>
        </div>
        <div class="contentdiv maincontent">
           <div>
                <button @click="setMenu(false)" :class="{txthighlight: !isMake}">View Transfer</button>
                <button @click="setMenu(true)" :class="{txthighlight: isMake}">Make Transfer</button>
            </div>
            <div>
                <div v-if="!isMake">
                    <table>
                        <thead>
                            <tr>
                                <th>To</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="trans in banking.personal_transactions" :key="trans.id">
                                <td>{{trans.to}}</td>
                                <td>{{trans.amount}}</td>
                                <td>{{trans.isSuccessful ? `Successful`: ``}}</td>
                                <td>{{trans.timestamp}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="createAccount">
                    <label>To</label><br/>
                    <select v-model="toUser">
                        <option v-for="user in Object.values(banking.users)" :key="user._id" value="user._id">
                            {{user.name}}&nbsp;{{user.account_no}}
                        </option>
                    </select><br/>
                    <label>Amount(USD)</label><br/>
                    <input type="number" placeholder="Enter amount here" v-model="amount"/><br/>
                    <button @click="sendMoney()">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import '@/css/user_dashboard.css';
    @import '@/css/account.css';
</style> 