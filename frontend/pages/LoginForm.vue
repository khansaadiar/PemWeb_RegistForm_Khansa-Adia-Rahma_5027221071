<template>
  <form @submit.prevent="onSubmit" class="form">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Email" required>
    <input v-model="password" type="password" placeholder="Password" required>
    <button :disabled="!isFormValid" type="submit">Login</button>
    <p v-if="loginError" class="error-message">Invalid email or password</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loginError = ref(false);

const isFormValid = computed(() => email.value !== '' && password.value !== '');

const router = useRouter();

const onSubmit = async () => {
  try {
    const response = await fetch("http://localhost:8000/admin/collections/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      // Account exists
      router.push('/components/home.vue');
    } else {
      // Account does not exist
      console.error('Login failed');
      loginError.value = true;
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

h2 {
  color: #ff7eb9;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #ff7eb9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>