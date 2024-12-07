import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import CadastreView from '../views/CadastreView.vue'
import AdminView from '../views/AdminView.vue'
import StudentsView from '../views/StudentsView.vue'
import ContaView from '../views/ContaView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/cadastre',
      name: 'cadastre',
      component: CadastreView,
      component: () => import('../views/CadastreView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: AdminView,
    },
    {
      path: '/account',
      name: 'account',
      component: ContaView,
    
    },
    {
      path: '/aluno',
      name: 'aluno',
      component: StudentsView,
    },
     
   
    

  ],
})

export default router
