import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.page.vue'
import Register from '@/pages/Register.page.vue'
import Dashboard from '@/pages/Dashboard.page.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard, Navbar, Footer,
    // meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.page.vue'),
  },
  
  // {
  //   path: '/invitation/new',
  //   name: 'NewInvitation',
  //   component: InvitationForm,
  //   meta: { requiresAuth: true },
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
//If you want even stronger security, you could switch to httpOnly cookies in a backend-based session system later — I can help with that too if you’re curious.