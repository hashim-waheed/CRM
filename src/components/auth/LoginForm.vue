<template>
  <form @submit.prevent="submitForm" class="login-form">
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log('Form Data:', formData)
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

.login-form input,
.login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.login-form button {
  background-color: #41b883; /* Vue official color for success */
  color: white;
  cursor: pointer;
  max-width: 75px;
}

.login-form button:hover {
  background-color: #3f9142; /* Slightly darker shade for hover */
}
</style>
