<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();

    import {ref} from "vue";
    const isCreate = ref(true);

    function setMenu(state){
        isCreate.value = state
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
                <button @click="setMenu(true)">Create Account</button>
                <button @click="setMenu(false)">View Account</button>
            </div>
            <div>
                <div class="createAccount" v-if="isCreate">
                    <label>User Role</label><br/>
                    <select>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select><br/>
                    <label>Account Name</label><br/>
                    <input type="text"/><br/>
                    <label>Account Number</label><br/>
                    <input type="text"/><br/>
                    <label>User Email</label><br/>
                    <input type="text"/><br/>
                   <label>User Password</label><br/>
                    <input type="text"/><br/>
                   <label>Account Balance</label><br/>
                    <input value="0.00" type="text"/><br/><br/>
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
                        <tbody v-if="banking.users[banking.currentUser].role==='user'">
                            <tr>
                                <td>{{banking.users[banking.currentUser].id}}</td>
                                <td>{{banking.users[banking.currentUser].email}}</td>
                                <td>{{banking.users[banking.currentUser].password}}</td>
                                <td>{{banking.users[banking.currentUser].role}}</td>
                                <td>{{banking.users[banking.currentUser].account_no}}</td>
                                <td>{{banking.users[banking.currentUser].name}}</td>
                                <td>{{banking.users[banking.currentUser].balance}}</td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr v-for="user in Object.values(banking.users)">
                                <td>{{user.id}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.password}}</td>
                                <td>{{user.role}}</td>
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