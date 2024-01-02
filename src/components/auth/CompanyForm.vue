<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <!-- Additional fields for Company -->
    <div class="mb-3">
      <label for="companyName" class="form-label">Company Name</label>
      <input type="text" v-model="companyName" class="form-control" id="companyName" placeholder="Company Name" required />
    </div>

    <div class="mb-3">
      <label for="businessType" class="form-label">Business Type</label>
      <input type="text" v-model="businessType" class="form-control" id="businessType" placeholder="Business Type" required />
    </div>

    <div class="mb-3">
      <label for="industry" class="form-label">Industry</label>
      <input type="text" v-model="industry" class="form-control" id="industry" placeholder="Industry" required />
    </div>

    <div class="mb-3">
      <label for="registrationNumber" class="form-label">Registration Number</label>
      <input type="text" v-model="registrationNumber" class="form-control" id="registrationNumber" placeholder="Registration Number" required />
    </div>

    <div class="mb-3">
      <label for="website" class="form-label">Website</label>
      <input type="text" v-model="website" class="form-control" id="website" placeholder="Website" />
    </div>

    <div class="mb-3">
      <label for="logo" class="form-label">Logo</label>
      <input type="file" @change="handleLogoUpload" class="form-control" id="logo" accept="image/*" />
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
    <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
    <!-- Add Back button -->
  </form>
</template>


<script>
import { useRegisterStore } from '@/stores/auth/register.js'
import { toRefs } from 'vue';

export default {
  setup() {
    const registerStore = useRegisterStore()
  // Destructure company data using toRefs
  const {
    companyName,
    businessType,
    industry,
    registrationNumber,
    website,
    logo
  } = toRefs(registerStore.company);

    const submitForm = () => {
      registerStore.setCompanyData({
      companyName: companyName.value,
      businessType: businessType.value,
      industry: industry.value,
      registrationNumber: registrationNumber.value,
      website: website.value,
      logo: logo.value
      })
      registerStore.setCurrentStep('verification')
      console.log('Complete Form Data:', {
    user: { ...registerStore.user },
    company: { ...registerStore.company }
  });
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
</style>
