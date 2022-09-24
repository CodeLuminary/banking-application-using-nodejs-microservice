<script setup>
    import Grid from "./icons/grid.vue";
    import Cash from "./icons/cash.vue";
    import Card from "./icons/card.vue";
    import Wallet from "./icons/wallet.vue";

    import {ref} from "vue";

    const menuCnt = ref(0);         
    function setMenuCnt(value){menuCnt.value = value;}
</script>
<template>
    <div class="sidebar">
        <div>
            <img alt="Vue logo" class="logo1" src="@/assets/logo.svg" width="100" height="100" />
            <h1>CodeLuminary Bank</h1>
        </div>
        <ul>
            <li><router-link to="/dashboard" @click="setMenuCnt(0)" :class="{highlight: menuCnt==0}"><span><Grid size="16"/></span>Dashboard</router-link></li>
            <li><router-link @click="setMenuCnt(1)" :class="{highlight: menuCnt==1}" to="/account"><span><Wallet /></span>Account</router-link></li>
            <li><router-link @click="setMenuCnt(2)" :class="{highlight: menuCnt==2}" to="/transfer"><span><Card /></span>Transfer</router-link></li>
            <li><router-link @click="setMenuCnt(3)" :class="{highlight: menuCnt==3}" to="/transactions"><span><Cash /></span>Transactions</router-link></li>
        </ul>
    </div>
</template>
<style scoped>
    @import '@/css/sidebar.css';
</style>