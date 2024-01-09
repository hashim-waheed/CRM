<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <div v-if="userType === 'company'" class="company-fields">
      <input type="text" v-model="company_name" placeholder="Company Name" required />
      <input type="text" v-model="business_type" placeholder="Business Type" required />
      <input type="text" v-model="industry" placeholder="Industry" required />
      <input type="text" v-model="registration_number" placeholder="Registration Number" required />
      <input type="text" v-model="website" placeholder="Website" />
      <input type="file" @change="handleLogoUpload" accept="image/*" />
    </div>
    <button type="submit">Register</button>
    <button type="button" @click="goBack">Back</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import RegisterService from '@/services/auth/register.js';

export default {
  setup() {
    const store = useStore();

    const company_name = ref(store.state.company.company_name || '');
    const business_type = ref(store.state.company.business_type || '');
    const industry = ref(store.state.company.industry || '');
    const registration_number = ref(store.state.company.registration_number || '');
    const website = ref(store.state.company.website || '');

    const userType = computed(() => store.state.user.userType);

    const submitForm = async () => {
      const companyData = {
        company_name: company_name.value,
        business_type: business_type.value,
        industry: industry.value,
        registration_number: registration_number.value,
        website: website.value,
      };

      console.log('companyData: (form)', companyData);

      store.dispatch('setCompanyData', companyData);

      store.dispatch('setCurrentStep', 'verification');

      const formData = {
        ...store.state.user ,
        ...store.state.company ,
      }

      console.log('Complete Form Data:', {
        formData
      });

      try {
    const response = await RegisterService.registerUser(formData);
    console.log('Response', response);
  } catch (error) {
    console.error('Error during registration:', error);
    
  }

    };

    const goBack = () => {
      store.dispatch('setCurrentStep', 'user');
    };

    return {
      company_name,
      business_type,
      industry,
      registration_number,
      website,
      userType,
      submitForm,
      goBack,
    };
  },
};
</script>

<style scoped>
.registration-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto; /* Center the form horizontally */
  align-items: center; 
  justify-content: center;
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
  background-color: #41b883; 
  color: white;
  cursor: pointer;
  width: 100px;
}

.registration-form button:hover {
  background-color: #3f9142; /* Slightly darker shade for hover */
}

.company-fields,
.freelancer-fields {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  /* margin:  auto; */
}

</style>
