import { createStore } from 'vuex';

export default createStore({
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
  mutations: {
    setCurrentStep(state, step) {
      state.previousStep = state.currentStep;
      state.currentStep = step;
    },
    setPreviousStep(state) {
      state.currentStep = state.previousStep;
    },
    setUser(state, data) {
      state.user = { ...state.user, ...data };
    },
    setCompanyData(state, data) {
      state.company = { ...state.company, ...data };
    },
    setFreelancerData(state, data) {
      state.freelancer = { ...state.freelancer, ...data };
    },
    setVerificationData(state, data) {
      state.verification = { ...state.verification, ...data };
    }
  },
  actions: {
    setCurrentStep({ commit }, step) {
      commit('setCurrentStep', step);
    },
    setPreviousStep({ commit }) {
      commit('setPreviousStep');
    },
    setUser({ commit }, data) {
      commit('setUser', data);
    },
    setCompanyData({ commit }, data) {
      commit('setCompanyData', data);
    },
    setFreelancerData({ commit }, data) {
      commit('setFreelancerData', data);
    },
    setVerificationData({ commit }, data) {
      commit('setVerificationData', data);
    }
  }
});
