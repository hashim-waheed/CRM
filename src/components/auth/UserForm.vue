<template>
  <form @submit.prevent="submitForm" class="registration-form">
    <input type="text" v-model="username" placeholder="Username" required />
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <select v-model="userType" required>
      <option value="" disabled>Select User Type</option>
      <option value="company">Company</option>
      <option value="freelancer">Freelancer</option>
    </select>
    <button type="submit">Next</button>
  </form>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup(){
    const store=useStore();
    const  username=ref(store.state.user.username ||'')
  const  email=ref(store.state.user.email ||'')
  const  password= ref(store.state.user.password ||'')
  const    userType=ref(store.state.user.userType ||'')

  const submitForm=async()=>{
    const userdata={
    username:username.value,
    email:email.value,
    password:password.value,
    userType:userType.value

    }
    store.dispatch('setUser', userdata)
     const nextStep = userType.value === 'company' || userType.value === 'freelancer'
         ? userType.value
         : 'user';
         store.dispatch('setCurrentStep', nextStep)
  }

  return{
    username,
    email,
    password,
    userType,
    submitForm
  }

  }
  // data() {
  //   return {
  //     username: '',
  //     email: '',
  //     password: '',
  //     userType: '',
  //   };
  // },
  // methods: {
  //   submitForm() {
  //     const formValues = {
  //       username: this.username,
  //       email: this.email,
  //       password: this.password,
  //       userType: this.userType,
  //     };

  //     this.$store.dispatch('setUser', formValues);

  //     const nextStep = this.userType === 'company' || this.userType === 'freelancer'
  //       ? this.userType
  //       : 'user';

  //     this.$store.dispatch('setCurrentStep', nextStep);
  //   },
  // },
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
  background-color: #41b883;
  color: white;
  cursor: pointer;
}
.registration-form button:hover {
  background-color: #3f9142;
}
</style>
