<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();

    import {ref} from "vue";
    const isCreate = ref(true);


    const user = banking.currentUser;
    //alert(user)

    function setMenu(state){
        isCreate.value = state
    }
</script>
<template>
    <div>
        <div>
            <div class="ta-header col-12">
                <h1>
                    ACCOUNT {{banking.getCurrentUser}}                 
                </h1>
                <p>
                    Manage account here           
                </p>
            </div>
        </div>
        <div class="contentdiv maincontent">
            <div>
                <button :class="user" @click="setMenu(true)">Create Account</button>
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
                    No data available
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import '@/css/user_dashboard.css';
    @import '@/css/account.css';
</style>    