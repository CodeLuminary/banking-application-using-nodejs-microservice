<script setup>
  import Sidebar from '@/components/sidebar.vue';
</script>
<template>
  <div class="dashboard">
    <Sidebar />
    <div>
      <h1>Yes</h1>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .dashboard {
    min-height: 100vh;
  }
}
</style>
