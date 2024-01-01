import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    currentStep: '',
    previousStep: '',
    user: {
      username: '',
      email: '',
      password: '',
      userType: ''
    },
    company: {
      companyName: '',
      businessType: '',
      industry: '',
      registrationNumber: '',
      website: '',
      logo: null
    },
    freelancer: {
      freelancerName: '',
      freelancerIndustry: ''
    },
    verification: {
      otp: ''
    }
  }),
  actions: {
    setCurrentStep(step) {
      this.previousStep = this.currentStep
      this.currentStep = step
    },

    setPreviousStep() {
      this.currentStep = this.previousStep
    },

    setUser(data) {
      this.user = { ...this.user, ...data }
    },
    setCompanyData(data) {
      this.company = { ...this.company, ...data }
    },
    setFreelancerData(data) {
      this.freelancer = { ...this.freelancer, ...data }
    },
    setVerificationData(data) {
      this.verification = { ...this.verification, ...data }
    }

    // Additional actions to mutate the state as needed
  }
})
