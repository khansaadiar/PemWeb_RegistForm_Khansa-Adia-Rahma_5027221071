<template>
    <div>
      <h2 class="title">Masukkan Data Diri Anda</h2>
      <FormRegistrasi />
    </div>
  </template>
  
  <script>
  import FormRegistrasi from '@/components/FormRegistrasi.vue';
  
  export default {
    components: {
      FormRegistrasi,
    },
  };
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    color: #ff69b4;
    background-color: #fff1c4;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  </style>