import { createStore } from 'vuex';
import register from '@/services/auth/register';


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
    },
  login:{
    email:'',
    password:'',
  },
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
    },
    setLogindata(state, data){
      state.login={...state.login, ...data}
    },
    setToken(state, token){
      state.token=token;
      localStorage.setItem('token',token)
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
    },
    setLogindata({commit}, data){
      commit('setLogindata',data);
    },

    
    async loginUser({ commit, state }) {
      try {
        const response = await register.loginUser(state.login);

        const {user, token} = response.data;

        commit('setUser', user);
        commit('setToken', token);



      } catch (error) {
        console.error('Login failed:', error.message);
        throw error; 
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.user !== null,
    getUser: (state) => state.user,
    getToken:(state)=>state.token,
  },
}
);
