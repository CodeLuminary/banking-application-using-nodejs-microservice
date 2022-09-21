<script setup>
 import {useBankingStore} from '@/stores/banking';

 const banking = useBankingStore();

 function GotoDashboard(id){
     location.href = "dashboard/" + id
     //router.push(`/dashboard/${2}`)
 }
</script>
<template>
    <main>
        <h2>Please log in as one of the following users</h2>
        <div v-for="user in Object.values(banking.users)" :key="user._id" class="eachUser" @click="GotoDashboard(user._id)">
        <div>
            <span>Name: {{user.name}}</span><br/>
            <span>User Role: {{user.userRole}}</span>
        </div>
        </div>
    </main>
</template>

<style scoped>
    .eachUser{
        padding: 5px;
    }
    .eachUser > div{
        background-color: #f2f2f2;
        border-radius: 10px;
        padding: 20px;
        cursor: pointer;
    }
</style>
