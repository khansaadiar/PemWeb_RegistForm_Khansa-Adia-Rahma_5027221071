<template>
  <div>
    <Home />
    <LoginForm />
  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import LoginForm from '@/pages/LoginForm.vue';

export default {
  components: {
    Home,
    LoginForm,
  },
};
</script>