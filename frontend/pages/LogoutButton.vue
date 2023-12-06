<!-- components/LogoutButton.vue -->
<template>
    <button @click="logout" class="logout-button">Logout</button>
  </template>
  
  <script>
  export default {
    name: 'LogoutButton',
    methods: {
      logout() {
        // Implement logout functionality
        this.$emit('logout');
      }
    }
  }
  </script>