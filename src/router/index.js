import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../views/AdminPage.vue'
import VotePage from '../views/VotePage.vue'

const routes = [
  { path: '/', name: 'vote', component: VotePage },
  { path: '/admin', name: 'admin', component: AdminPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
