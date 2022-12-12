import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products-view',
    component: () => import('@/products/pages/products')
  },
  {
    path: '/products/:id',
    name: 'products-detail',
    component: () => import('@/products/pages/product-detail')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/authenticate/pages/sign-up')
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: () => import('@/authenticate/pages/log-in')
  },
  {
    path: '/profile',
    name: 'profile-view',
    component: () => import('@/profile/pages/profile')
  },
  {
    path: '/register-product',
    name: 'register-product',
    component: () => import('@/products/pages/register-product')
  },
  {
    path: '/products-offer',
    name: 'products-offer',
    component: () => import('@/products/pages/products-offer')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
