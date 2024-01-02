<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <!-- Additional fields for Company -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-6">
        <div class="mb-3">
          <label for="companyName" class="form-label">Company Name</label>
          <input
            type="text"
            v-model="companyName"
            class="form-control"
            id="companyName"
            placeholder="Company Name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="businessType" class="form-label">Business Type</label>
          <input
            type="text"
            v-model="businessType"
            class="form-control"
            id="businessType"
            placeholder="Business Type"
            required
          />
        </div>

        <div class="mb-3">
          <label for="industry" class="form-label">Industry</label>
          <input
            type="text"
            v-model="industry"
            class="form-control"
            id="industry"
            placeholder="Industry"
            required
          />
        </div>
      </div>

      <!-- Second Column -->
      <div class="col-md-6">
        <div class="mb-3">
          <label for="registrationNumber" class="form-label">Registration Number</label>
          <input
            type="text"
            v-model="registrationNumber"
            class="form-control"
            id="registrationNumber"
            placeholder="Registration Number"
            required
          />
        </div>

        <div class="mb-3">
          <label for="website" class="form-label">Website</label>
          <input
            type="text"
            v-model="website"
            class="form-control"
            id="website"
            placeholder="Website"
          />
        </div>

        <div class="mb-3">
          <label for="logo" class="form-label">Logo</label>
          <input
            type="file"
            @change="handleLogoUpload"
            class="form-control"
            id="logo"
            accept="image/*"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Full-width Column for Buttons -->
      <div class="col-md-12">
        <button type="submit" class="btn btn-primary">Register</button>
        <button type="button" @click="goBack" class="btn btn-secondary">Back</button>
      </div>
    </div>
  </form>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      userType: ''
    }
  },
  methods: {
    submitForm() {
      const registerStore = useRegisterStore()

      if (this.userType === 'company' || this.userType === 'freelancer') {
        registerStore.setUser({
          username: this.username,
          email: this.email,
          password: this.password,
          userType: this.userType
        })
        // Proceed to the next step
        registerStore.setCurrentStep(this.userType)
      } else {
        // Handle error or validation message for userType not selected
        // Example: Show an error message or prevent form submission
      }
    }
  }
}
</script>

<style scoped>
.registration-form {
  background-color: aquamarine;
  padding: 20px;
  border-radius: 20px;
  width: 1000px;
}
</style>
