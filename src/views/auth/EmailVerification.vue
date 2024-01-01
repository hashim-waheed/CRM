<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form @submit.prevent="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
        <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="userType"> User Type </label>
        <select
          v-model="userType"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="userType"
        >
          <option value="company">Company</option>
          <option value="freelancer">Freelancer</option>
        </select>
      </div>
      <!-- Company form fields -->
      <template v-if="userType === 'company'">
        <!-- Add fields for company -->
      </template>
      <!-- Freelancer form fields -->
      <template v-if="userType === 'freelancer'">
        <!-- Add fields for freelancer -->
      </template>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
//   import { useRegistrationStore } from '@/stores/auth/registration' // Import the registration store
//   import { ref } from 'vue'

//   export default {
//     setup() {
//       const registrationStore = useRegistrationStore()

//       const username = ref('')
//       const email = ref('')
//       const password = ref('')
//       const userType = ref('company') // Default value set to 'company'

//       const register = () => {
//         registrationStore.registerUser({
//           username: username.value,
//           email: email.value,
//           password: password.value,
//           userType: userType.value
//         })
//       }

//       return { username, email, password, userType, register }
//     }
//   }
</script>

<style>
/* Add your custom styles here */
</style>
