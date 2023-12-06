<!-- components/LoginForm.vue -->
<template>
    <form @submit.prevent="login" class="form">
      <h2>Login</h2>
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        // Implement login functionality using Axios
        try {
          const response = await axios.post('http://10.15.41.250/login', {
            username: this.username,
            password: this.password
          });
          // Handle successful login response
          this.$emit('login');
        } catch (error) {
          // Handle login error
          console.error(error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    color: #ff7eb9;
    margin-bottom: 10px;
  }
  
  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #ff7eb9;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>