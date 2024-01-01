import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    currentStep: 'user',
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
    }
  }),
  actions: {
    setCurrentStep(step) {
      this.currentStep = step
    },
    setUser(data) {
      this.user = { ...this.user, ...data }
    },
    setCompanyData(data) {
      this.company = { ...this.company, ...data }
    },
    setFreelancerData(data) {
      this.freelancer = { ...this.freelancer, ...data }
    }
    // Additional actions to mutate the state as needed
  }
})
