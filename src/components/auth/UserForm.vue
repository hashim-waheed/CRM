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
import { ref } from 'vue'
import { useRegisterStore } from '@/stores/auth/register.js'

export default {
  setup() {
    const registerStore = useRegisterStore()

    // Define reactive refs for form fields
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const userType = ref('')

    // If coming back from the next step, populate the form fields with the stored values
    const storedUserData = registerStore.user
    if (storedUserData) {
      username.value = storedUserData.username
      email.value = storedUserData.email
      password.value = storedUserData.password
      userType.value = storedUserData.userType
    }

    const submitForm = () => {
      // console.log('User Data before setting: ', {
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      //   userType: this.userType
      // })
      const formValues = {
        username: username.value,
        email: email.value,
        password: password.value,
        userType: userType.value
      }

      // Store form values locally
      registerStore.setUser(formValues)
      console.log('User Data after setting: ', registerStore.user)
      // Move to the next step
      registerStore.setCurrentStep(
        userType.value === 'company' || userType.value === 'freelancer' ? userType.value : 'user'
      )
    }

    return {
      username,
      email,
      password,
      userType,
      submitForm
    }
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
