<template>
<div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/authStore.ts'

const auth = useAuthStore()

onMounted(() => {
  auth.verifyToken()
})
</script>

<style>
body {
  margin: 0;
  background-color: #fdfaf5;
  font-family: 'Georgia', serif;
}
main {
  min-height: 80vh;
}
</style>
