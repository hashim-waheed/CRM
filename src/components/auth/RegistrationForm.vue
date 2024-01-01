<template>
  <div class="registration-form">
    <transition name="slide" mode="out-in">
      <component :is="currentStepComponent" @nextStep="nextStep" @prevStep="prevStep" />
    </transition>
  </div>
</template>

<script>
import { useRegisterStore } from '@/stores/auth/register.js'
import { computed } from 'vue'
import UserForm from '@/components/auth/UserForm.vue'
import CompanyForm from '@/components/auth/CompanyForm.vue'
import FreelancerForm from '@/components/auth/FreelancerForm.vue'

export default {
  components: {
    UserForm,
    CompanyForm,
    FreelancerForm
  },
  setup() {
    const registerStore = useRegisterStore()

    const currentStepComponent = computed(() => {
      const currentStep = registerStore.currentStep
      if (currentStep === 'user') {
        return UserForm
      } else if (currentStep === 'company') {
        return CompanyForm
      } else if (currentStep === 'freelancer') {
        return FreelancerForm
      }
      // Return a default component or handle invalid steps
      return UserForm
    })

    const nextStep = (step) => {
      registerStore.setCurrentStep(step)
    }

    const prevStep = () => {
      registerStore.goToPreviousStep()
    }

    return {
      currentStepComponent,
      nextStep,
      prevStep
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
