<template>
    
    <header>
      <h1>Admin Dashboard</h1>
    </header>
  
    <nav>
   <router-link to="/admin-dashboard/company">Company</router-link>
   <router-link to="/admin-dashboard/freelancer">Freelancer</router-link>
    </nav>
  
    <router-view></router-view>
  
  </template>
  
  <script>
  export default{
      name:'admin-component'
  }
  </script>
  
  <style scoped>
  body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
  
    header {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
    }
  
    nav {
      background-color: #eee;
      padding: 10px;
    }
  
    nav a {
      margin-right: 15px;
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
  
    main {
      padding: 20px;
    }
  
  </style>