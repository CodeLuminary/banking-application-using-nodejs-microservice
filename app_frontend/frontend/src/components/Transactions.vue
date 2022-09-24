<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();
</script>
<template>
    <div>
        <div class="ta-header col-12">
            <h1>
                TRANSACTIONS            
            </h1>
            <p>
                View all transactions here       
            </p>
        </div>
        <div class="contentdiv maincontent">
            <table>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date/Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in banking.transactions">
                        <td>{{user.from}}</td>
                        <td>{{user.to}}</td>
                        <td>{{user.amount}}</td>
                        <td>{{user.isSuccessful ? `Successful`: ``}}</td>
                        <td>{{user.timestamp}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
    @import '@/css/user_dashboard.css';
    @import '@/css/account.css';
</style> 