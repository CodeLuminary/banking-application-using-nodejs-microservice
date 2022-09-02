<script setup>
    import Grid from "./icons/grid.vue";
    import Cash from "./icons/cash.vue";
    import Card from "./icons/card.vue";
    import Wallet from "./icons/wallet.vue";
</script>
<template>
    <div class="sidebar">
        <div>
            <img alt="Vue logo" class="logo1" src="@/assets/logo.svg" width="100" height="100" />
            <h1>CodeLuminary Bank</h1>
        </div>
        <ul>
            <li><a><span><Grid/></span>Dashboard</a></li>
            <li><a><span><Wallet /></span>Account</a></li>
            <li><a><span><Card /></span>Transfer</a></li>
            <li><a><span><Cash /></span>Transactions</a></li>
        </ul>
    </div>
</template>
<style scoped>
    @import '@/css/sidebar.css';
</style>