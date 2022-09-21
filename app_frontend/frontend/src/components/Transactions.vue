<script setup>
    import {useBankingStore} from '@/stores/banking';
    const banking = useBankingStore();
</script>
<template>
    <div>
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
                    <td>{{user.to}</td>
                    <td>{{user.amount}}</td>
                    <td>{{user.isSuccessful ? `Successful`: ``}}</td>
                    <td>{{user.timestamp}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>