import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import Product from '@/components/product/Product.vue'
import Painel from '../views/painel-cliente/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/painel-cliente',
    name: 'painel',
    component: Painel
  },
  {
    path: '/categoria/:slug',
    name: 'categoria',
    component: Category,
    props: true
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Product,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
