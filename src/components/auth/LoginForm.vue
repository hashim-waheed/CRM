<template>
  <form @submit.prevent="submitForm" class="login-form">
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" placeholder="Password" required />

    <button type="submit">Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';


export default {

setup(){
  const store =useStore();
  const email=ref('')
  const password=ref('')
  const submitForm=async ()=>{
    const cred={
      email:email.value,
      password:password.value
    };
    try{
      const response=await store.$axios.post('/login',cred);
      // console.log('Response:::',response);
      const user=response.data;
      store.dispatch('setUser',user)
      store.dispatch('setCurrentStep', 'verification');
      alert('login done')
      console.log(user)
    }
    catch(error){
      if (error.response) {

    console.error('Server responded with:', error.response.data);
    console.error('Status code:', error.response.status);
    alert('Login failed. Server error.');
  } else if (error.request) {
    console.error('No response received from the server.');
    alert('Login failed. No response from the server.');
  } else {
    console.error('Error setting up the request:', error.message);
    alert('Login failed. Please try again.');
  }
    }

  }
  return{
    email, password, submitForm
  }
}



  // data() {
  //   return {
  //     email: '',
  //     password: ''
  //   }
  // },
  // methods: {
  //   async submitForm() { 
  //     const cred={
  //       email:this.email,
  //       password:this.password
  //     }
  //     try{
  //       const response= await this.$axios.post('/login', cred);
  //       const user=response.data;   
  //     this.$store.dispatch('setUser', user);
  //     alert('login done')
  //     console.log(user)
  //   }
  //     catch(error){
  //       console.log('login error', error)
  //       alert('login error')
  //     }
  //   }
  // }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

.login-form input,
.login-form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.login-form button {
  background-color: #41b883; /* Vue official color for success */
  color: white;
  cursor: pointer;
  max-width: 75px;
}

.login-form button:hover {
  background-color: #3f9142; /* Slightly darker shade for hover */
}
</style>
