<template>
    <div class="home-container">
      <div class="promo-container">
        <h1 class="promo-title">Welcome to ChatApp</h1>
        <p class="promo-description">Connect with friends and family through instant messaging.</p>
        <router-link to="/join" class="promo-button">Get Started</router-link>
      </div>
    </div>
  </template>
  
  <style>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .promo-container {
    text-align: center;
  }
  
  .promo-title {
    font-size: 36px;
    font-weight: bold;
  }
  
  .promo-description {
    font-size: 18px;
    margin-top: 20px;
  }
  
  .promo-button {
    padding: 10px 20px;
    background-color: #ff7eb9;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    text-decoration: none;
  }
  
  .promo-button:hover {
    background-color: #ff5f9a;
  }
  </style>