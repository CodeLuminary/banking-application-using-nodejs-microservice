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
