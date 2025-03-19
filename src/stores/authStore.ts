/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import api from '../services/api'

interface AuthState {
  user: any | null
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
  }),

  actions: {
    setUser(userData: any, token: string) {
      this.user = userData
      this.token = token
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', token)
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },

    async verifyToken() {
      try {
        const response = await api.get('/verify', {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        this.user = response.data.user
        this.isAuthenticated = true
      } catch (err: any) {
        console.error('Token verification failed:', err?.response?.data?.message || err.message)
        this.logout()
      }
    },
    async claimGuestInvitations() {
        const guestId = localStorage.getItem('guestId')
        if (guestId && this.token) {
          try {
            await api.post('/invitations/claim', { guestId }, {
              headers: { Authorization: `Bearer ${this.token}` }
            })
            localStorage.removeItem('guestId')
          } catch (error) {
            console.error('Guest invitations claim failed:', error)
          }
        }
      }      
  },
})
