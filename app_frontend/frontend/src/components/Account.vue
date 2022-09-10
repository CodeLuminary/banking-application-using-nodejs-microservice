<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();

    import {ref} from "vue";
    const isCreate = ref(false);

    const name = ref('');
    const role = ref('user');
    const account_no = ref('');
    const email = ref('');
    const password = ref('');
    const balance = ref('0.00');

    function setMenu(state){
        isCreate.value = state
    }
    function addAccount(){
        const obj = {
            email: email.value,
            password: password.value,
            balance: balance.value,
            userRole: role.value,
            name: name.value,
            account_no: account_no.value
        }
        fetch('/users/add-user',{
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
        <div>
            <div class="ta-header col-12">
                <h1>
                    ACCOUNT            
                </h1>
                <p>
                    Manage account here           
                </p>
            </div>
        </div>
        <div class="contentdiv maincontent">
            <div>
                <button @click="setMenu(false)" :class="{txthighlight: !isCreate}">View Account</button>
                <button v-if="banking.users[banking.currentUser].userRole=='admin'" @click="setMenu(true)" :class="{txthighlight: isCreate}">Create Account</button>
            </div>
            <div>
                <div class="createAccount" v-if="isCreate">
                    <label>User Role</label><br/>
                    <select v-model="role">
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select><br/>
                    <label>Account Name</label><br/>
                    <input v-model="name" type="text"/><br/>
                    <label>Account Number</label><br/>
                    <input v-model="account_no" type="text"/><br/>
                    <label>User Email</label><br/>
                    <input v-model="email" type="text"/><br/>
                   <label>User Password</label><br/>
                    <input v-model="password" type="text"/><br/>
                   <label>Account Balance</label><br/>
                    <input v-model="balance" type="text"/><br/><br/>
                    <button>Save</button>
                </div>
                <div v-else>
                    <table>
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Account Number</th>
                                <th>Name</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody v-if="banking.users[banking.currentUser].userRole==='user'">
                            <tr>
                                <td>{{banking.users[banking.currentUser]._id}}</td>
                                <td>{{banking.users[banking.currentUser].email}}</td>
                                <td>{{banking.users[banking.currentUser].password}}</td>
                                <td>{{banking.users[banking.currentUser].userRole}}</td>
                                <td>{{banking.users[banking.currentUser].account_no}}</td>
                                <td>{{banking.users[banking.currentUser].name}}</td>
                                <td>{{banking.users[banking.currentUser].balance}}</td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr v-for="user in Object.values(banking.users)">
                                <td>{{user._id}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.password}}</td>
                                <td>{{user.userRole}}</td>
                                <td>{{user.account_no}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.balance}}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import '@/css/user_dashboard.css';
    @import '@/css/account.css';
</style>    