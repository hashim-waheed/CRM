<template>
<nav-component></nav-component>
</template>

<script>
import TheNavBar from '@/components/Navbar/TheNavBar.vue';

export default {
  name: 'nav-bar-view',
  components: {
    'nav-component':TheNavBar
  }
}
</script>