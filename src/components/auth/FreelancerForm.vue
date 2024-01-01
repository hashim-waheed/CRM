<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <!-- Additional fields for Freelancer -->
    <div class="freelancer-fields">
      <input type="text" v-model="freelancerName" placeholder="Freelancer Name" required />
      <input type="text" v-model="freelancerIndustry" placeholder="Industry" required />
    </div>
    <button type="submit">Register</button>
    <button type="button" @click="goBack">Back</button>
  </form>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'

export default {
  setup() {
    const registerStore = useRegisterStore()

    const freelancerName = registerStore.freelancerName
    const freelancerIndustry = registerStore.freelancerIndustry

    const submitForm = () => {
      registerStore.setFreelancerName(freelancerName)
      registerStore.setFreelancerIndustry(freelancerIndustry)
      registerStore.setCurrentStep('user')
    }

    const goBack = () => {
      registerStore.setCurrentStep('user')
    }

    return {
      freelancerName,
      freelancerIndustry,
      submitForm,
      goBack
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
  background-color: #41b883; /* Vue official color for success */
  color: white;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #3f9142; /* Slightly darker shade for hover */
}

.company-fields,
.freelancer-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 150px;
  /* margin:  auto; */
}
</style>
