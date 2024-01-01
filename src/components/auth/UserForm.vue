<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <input type="text" v-model="username" placeholder="Username" required />
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <select v-model="userType" required>
      <option value="" disabled selected>Select User Type</option>
      <option value="company">Company</option>
      <option value="freelancer">Freelancer</option>
    </select>
    <button type="submit">Next</button>
  </form>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'

export default {
  setup() {
    const registerStore = useRegisterStore()

    const username = registerStore.username
    const email = registerStore.email
    const password = registerStore.password
    const userType = registerStore.userType

    const submitForm = () => {
      if (registerStore.userType === 'company' || registerStore.userType === 'freelancer') {
        registerStore.setUsername(username)
        registerStore.setEmail(email)
        registerStore.setPassword(password)
        registerStore.setUserType(userType)
        registerStore.setCurrentStep(userType)
      } else {
        // Handle error or validation message for userType not selected
        // Example: Show an error message or prevent form submission
      }
    }

    return { username, email, password, userType, submitForm }
  }
}
</script>

<style scoped>
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}
.registration-form input,
.registration-form select,
.registration-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}
.registration-form button {
  background-color: #41b883;
  color: white;
  cursor: pointer;
}
.registration-form button:hover {
  background-color: #3f9142;
}
</style>
