<template>
  <div class="register">
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from '@/components/auth/RegistrationForm.vue'

export default {
  components: {
    RegistrationForm
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
