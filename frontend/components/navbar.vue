<template>
    <div>
      <nav class="navbar">
        <div class="navbar-logo">
          <nuxt-link to="/">Chat App</nuxt-link>
        </div>
        <ul class="navbar-links">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
        <div class="navbar-login">
          <template v-if="isLoggedIn">
            <span>Welcome, {{ username }}</span>
            <button @click="logout">Logout</button>
          </template>
          <template v-else>
            <nuxt-link to="/LoginForm">Login</nuxt-link>
            <nuxt-link to="/LogoutButton">Logout</nuxt-link>
          </template>
        </div>
      </nav>
  
      <!-- Content of the page goes here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false,
        username: ""
      };
    },
    methods: {
      login() {
        // Implement login functionality
        this.isLoggedIn = true;
        this.username = "John Doe";
      },
      logout() {
        // Implement logout functionality
        this.isLoggedIn = false;
        this.username = "";
      }
    }
  }
  </script>
  
  <style>
  .navbar {
    background-color: #ff7eb9;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }
  
  .navbar-logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .navbar-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .navbar-links li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
  
  .navbar-links li a:hover {
    text-decoration: underline;
  }
  
  .navbar-login {
    display: flex;
    gap: 10px;
  }
  
  .navbar-login span {
    font-weight: bold;
  }
  
  .navbar-login button {
    padding: 5px 10px;
    background-color: #fff;
    color: #ff7eb9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>