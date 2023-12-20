<template>
    <div>
      <h2 class="title">Cek Status Pendaftaran</h2>
      <CheckStatus />
    </div>
  </template>
  
  <script>
  import CheckStatus from '@/components/CheckStatus.vue';
  
  export default {
    components: {
      CheckStatus,
    },
  };
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    color: #ff69b4;
    background-color: #fffdc4;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  </style>