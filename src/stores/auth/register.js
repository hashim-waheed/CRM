import { defineStore } from 'pinia';
import axios from 'axios'

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
      company_name: '',
      business_type: '',
      industry: '',
      registration_number: '',
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


export const useDepartmentStore = defineStore('department', {
  state: () => ({
    departments: [],
  }),
  actions: {
    async fetchDepartments() {
      try {
        const response = await axios.get('http://your-api-url/departments');
        this.departments = response.data;
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    },
  },
});
