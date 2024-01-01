<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-600"
  >
    <form
      @submit.prevent="register"
      class="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
        <input
          v-model="username"
          class="input-field"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
        <input v-model="email" class="input-field" id="email" type="email" placeholder="Email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
        <input
          v-model="password"
          class="input-field"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userType"> User Type </label>
        <select v-model="userType" class="input-field" id="userType">
          <option value="company">Company</option>
          <option value="freelancer">Freelancer</option>
        </select>
      </div>
      <!-- Company form fields -->
      <template v-if="userType === 'company'">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="companyName">
            Company Name
          </label>
          <input
            v-model="companyName"
            class="input-field"
            id="companyName"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <!-- Add other fields for company -->
      </template>
      <!-- Freelancer form fields -->
      <template v-if="userType === 'freelancer'">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="freelancerName">
            Freelancer Name
          </label>
          <input
            v-model="freelancerName"
            class="input-field"
            id="freelancerName"
            type="text"
            placeholder="Freelancer Name"
          />
        </div>
        <!-- Add other fields for freelancer -->
      </template>
      <div class="flex items-center justify-between">
        <button class="button-primary" type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRegistrationStore } from '@/stores/auth/registration' // Import the registration store
import { ref } from 'vue'

export default {
  setup() {
    const registrationStore = useRegistrationStore()

    const username = ref('')
    const email = ref('')
    const password = ref('')
    const userType = ref('company') // Default value set to 'company'
    const companyName = ref('')
    const freelancerName = ref('')

    const register = () => {
      let userData = {
        username: username.value,
        email: email.value,
        password: password.value,
        userType: userType.value
      }
      if (userType.value === 'company') {
        userData = { ...userData, companyName: companyName.value }
      } else {
        userData = { ...userData, freelancerName: freelancerName.value }
      }
      registrationStore.registerUser(userData)
    }

    return { username, email, password, userType, companyName, freelancerName, register }
  }
}
</script>

<style>
/* Custom styles for the registration form */

/* Style for the input fields */
.input-field {
  appearance: none;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

/* Style for the primary button */
.button-primary {
  background-color: #68d391; /* Green */
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-primary:hover {
  background-color: #48bb78; /* Darker Green */
}
</style>
