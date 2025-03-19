<!-- src/pages/Register.page.vue -->
<template>
    <div class="register-page">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <label>Email:</label>
        <input v-model="email" type="email" required />
  
        <label>Password:</label>
        <input v-model="password" type="password" required />
  
        <label>Confirm Password:</label>
        <input v-model="confirmPassword" type="password" required />
  
        <button type="submit">Register</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/authStore'
  import api from '../services/api'
  
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const errorMessage = ref('')
  const router = useRouter()
  const authStore = useAuthStore()
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match'
      return
    }
  
    try {
      const guestId = localStorage.getItem('guestId')
  
      const response = await api.post('/api/auth/signup', {
        email: email.value,
        password: password.value,
        guestId,
      })
  
      const { token, user } = response.data
  
      authStore.setUser(user, token)
      await authStore.claimGuestInvitations()
  
      if (guestId) localStorage.removeItem('guestId')
  
      router.push('/')
    } catch (err: any) {
      errorMessage.value = err.response?.data?.message || 'Signup failed'
    }
  }
  </script>
  