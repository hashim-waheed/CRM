<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue'

export default {
  components: {
    LoginForm
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
