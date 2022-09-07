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
            <li><router-link to="/"><span><Grid size="16"/></span>Dashboard</router-link></li>
            <li><router-link to="/account"><span><Wallet /></span>Account</router-link></li>
            <li><router-link to="/transfer"><span><Card /></span>Transfer</router-link></li>
            <li><router-link><span><Cash /></span>Transactions</router-link></li>
        </ul>
    </div>
</template>
<style scoped>
    @import '@/css/sidebar.css';
</style>