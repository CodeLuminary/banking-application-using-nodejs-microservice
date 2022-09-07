<script setup>
  import Sidebar from '@/components/sidebar.vue';
  import {useRoute} from 'vue-router';

  import {useBankingStore} from '@/stores/banking';
  const banking = useBankingStore();

  const route = useRoute();
  
  if(route.params.id) banking.setCurrentUser(route.params.id);
  console.log(banking.getCurrentUser)
  
</script>
<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .dashboard {
    min-height: 100vh;
    width: 100%;
  }
  #app{
    width: 100% !important;
    padding: 0px !important
  }
  .content{
    width: calc(100% - var(--sidebar-width));
    margin-left: var(--sidebar-width);
    padding: 20px;
    background-color: #fafafa;
    height: 100vh;
    overflow-y: scroll  
  }
  body{
    margin: 0px !important;
    padding: 0px !important;
  }
</style>
