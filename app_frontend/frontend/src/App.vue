<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import {useBankingStore} from '@/stores/banking';

  const banking = useBankingStore();
  banking.setUsers();
  banking.getAllUsers();
</script>

<template>
  <RouterView />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/css/constant.css';

  *{box-sizing: border-box;}

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  
</style>
