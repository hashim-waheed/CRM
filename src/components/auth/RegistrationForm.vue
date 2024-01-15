// components/auth/RegistrationForm.vue
<template>
  <div class="registration-form">
    <transition name="slide" mode="out-in">
      <component :is="currentStepComponent" @nextStep="nextStep" @prevStep="prevStep" />
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'; 
import UserForm from './UserForm.vue';
import CompanyForm from './CompanyForm.vue';
import FreelancerForm from './FreelancerForm.vue';
import VerificationForm from './VerificationForm.vue';
import LoginForm from './LoginForm.vue';
import CompanyComponent from '../company/CompanyComponent.vue';

export default {
  components: {
    UserForm,
    CompanyForm,
    FreelancerForm,
    VerificationForm,
    LoginForm,
    CompanyComponent,
  
  },
  setup() {
    const store = useStore(); 

    const currentStepComponent = computed(() => {
      const currentStep = store.state.currentStep; 
      if (currentStep === 'user') {
        return UserForm;
      } else if (currentStep === 'company') {
        return CompanyForm;
      } else if (currentStep === 'freelancer') {
        return FreelancerForm;
      } else if (currentStep === 'verification') {
        return VerificationForm;
      }
      else if (currentStep === 'login'){
        return LoginForm;
      }
      else if (currentStep === 'company-component'){
        return CompanyComponent;
      }
      return UserForm;
    });

    const nextStep = (step) => {
      store.dispatch('setCurrentStep', step); 
    };

    const prevStep = () => {
      store.dispatch('setPreviousStep');
    };

    return {
      currentStepComponent,
      nextStep,
      prevStep
    };
  }
};
</script>

<style scoped>
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

/* Existing styles */

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Additional styling for smoother transition */
/* .registration-form > * {
  position: absolute;
  width: 100%;
} */
</style>
