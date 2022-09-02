<script setup>
  import Gretting from '@/components/HelloUser.vue'
  import Users from '@/components/RegisteredUsers.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Gretting msg="Welcome to CodeLuminary Bank" />

    </div>
  </header>
    <Users/>
</template>

<style scoped>
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
  }
  @media only screen and (min-width: 1024px){
    #app {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }
  }
  
</style>
