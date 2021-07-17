import Vue from 'vue'
import VueRouter from 'vue-router'
import Entreterimento from '../views/entreterimento.vue'
import Fisica from '../views/fisica.vue'
import Mental from '../views/mental.vue'
import Nutricao from '../views/nutricao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/entreterimento',
    name: 'Entreterimento',
    component: Entreterimento
  },
  {
    path: '/saude-fisica',
    name: 'Fisica',
    component: Fisica
  },
  {
    path: '/saude-mental',
    name: 'Mental',
    component: Mental
  },
  {
    path: '/nutricao',
    name: 'Nutricao',
    component: Nutricao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
