<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <!-- Additional fields for Company -->
    <div class="company-fields">
      <input type="text" v-model="companyName" placeholder="Company Name" required />
      <input type="text" v-model="businessType" placeholder="Business Type" required />
      <input type="text" v-model="industry" placeholder="Industry" required />
      <input type="text" v-model="registrationNumber" placeholder="Registration Number" required />
      <input type="text" v-model="website" placeholder="Website" />
      <input type="file" @change="handleLogoUpload" accept="image/*" />
    </div>
    <button type="submit">Register</button>
    <button type="button" @click="goBack">Back</button>
    <!-- Add Back button -->
  </form>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'
import { ref } from 'vue'

export default {
  setup() {
    const registerStore = useRegisterStore()

    // Fetch company data from the store
    const storedCompanyData = registerStore.company

    // Initialize local data to hold form values
    const companyName = ref(storedCompanyData.companyName || '')
    const businessType = ref(storedCompanyData.businessType || '')
    const industry = ref(storedCompanyData.industry || '')
    const registrationNumber = ref(storedCompanyData.registrationNumber || '')
    const website = ref(storedCompanyData.website || '')
    const logo = ref(storedCompanyData.logo || '')

    const submitForm = () => {
      console.log('Company Data before setting:', {
        companyName: companyName.value,
        businessType: businessType.value,
        industry: industry.value,
        registrationNumber: registrationNumber.value,
        website: website.value,
        logo: logo.value
      })

      registerStore.setCompanyData({
        companyName: companyName.value,
        businessType: businessType.value,
        industry: industry.value,
        registrationNumber: registrationNumber.value,
        website: website.value,
        logo: logo.value
      })

      // Log company data after setting in the store
      console.log('Company Data after setting:', registerStore.company)

      registerStore.setCurrentStep('verification')
    }

    const goBack = () => {
      // Move back to the 'user' step
      registerStore.setCurrentStep('user')
    }

    return {
      companyName,
      businessType,
      industry,
      registrationNumber,
      website,
      logo,
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
