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

<style>
@media (min-width: 1024px) {
  .register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
  }
}
</style>
