<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <!-- Additional fields for Company -->
    <div class="company-fields">
      <input type="text" v-model="companyName" placeholder="Company Name" required />
      <input type="text" v-model="businessType" placeholder="Business Type" required />
      <input type="text" v-model="industry" placeholder="Industry" required />
      <input type="text" v-model="registrationNumber" placeholder="Registration Number" required />
      <input type="text" v-model="website" placeholder="Website" required />
      <input type="file" @change="handleLogoUpload" accept="image/*" />
    </div>
    <button type="submit">Register</button>
    <button type="button" @click="goBack">Back</button>
    <!-- Add Back button -->
  </form>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'

export default {
  setup() {
    const registerStore = useRegisterStore()

    const companyName = registerStore.companyName
    const businessType = registerStore.businessType
    const industry = registerStore.industry
    const registrationNumber = registerStore.registrationNumber
    const website = registerStore.website
    const logo = registerStore.logo

    const submitForm = () => {
      registerStore.setCompanyName(companyName)
      registerStore.setBusinessType(businessType)
      registerStore.setIndustry(industry)
      registerStore.setRegistrationNumber(registrationNumber)
      registerStore.setWebsite(website)
      registerStore.setLogo(logo)
      registerStore.setCurrentStep('user')
    }

    const goBack = () => {
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
