<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <div class="verification-fields">
      <input type="text" v-model="otp" placeholder="OTP" required />
    </div>
    <button type="submit">Verify</button>
    <button type="button" @click="goBack">Back</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const otp = ref(store.state.verification.otp || '');

    const submitForm = () => {
      const verificationData = {
        otp: otp.value,
      };

      store.dispatch('setVerificationData', verificationData);

      store.dispatch('setPreviousStep');
    };

    const goBack = () => {
      store.dispatch('setPreviousStep');
    };

    return {
      otp,
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
  margin: 0 auto;
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
  background-color: #41b883; /* Vue official color for success */
  color: white;
  cursor: pointer;
}

.registration-form button:hover {
  background-color: #3f9142; /* Slightly darker shade for hover */
}

/* You can add styles for verification-fields if needed */
</style>
