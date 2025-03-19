<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <label>Email:</label>
        <input v-model="email" type="email" required />
        <label>Password:</label>
        <input v-model="password" type="password" required />
        <button type="submit">Login</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/authStore'
  import api from '../services/api.ts'
  
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  const authStore = useAuthStore()
  
  const handleLogin = async () => {
  try {
    const guestId = localStorage.getItem('guestId')

    const response = await api.post('/api/auth/login', {
      email: email.value,
      password: password.value,
      guestId: guestId,
    })

    const { token, user } = response.data
    authStore.setUser(user, token)
    await authStore.claimGuestInvitations()


    // Clean up guestId once claimed
    if (guestId) localStorage.removeItem('guestId')

    router.push('/')
  } catch (err: any) {
    errorMessage.value = err.response?.data?.message || 'Login failed'
  }
}

  </script>
  