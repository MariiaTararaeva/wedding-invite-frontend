<template>
    <div class="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you're lost...</p>
  
  
      <router-link to="/">Go Home</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .not-found-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background: #fff0f5;
    position: relative;
    overflow: hidden;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  a {
    margin-top: 2rem;
    font-size: 1.1rem;
    text-decoration: underline;
    color: #a052aa;
  }
  

  </style>
  