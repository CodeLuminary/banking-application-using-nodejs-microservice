<script setup>
  import Sidebar from '@/components/sidebar.vue';
  //alert(this.$route.params.id)
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
@media (min-width: 1024px) {
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
  }
  body{
    margin: 0px !important;
    padding: 0px !important;
  }
}
</style>
