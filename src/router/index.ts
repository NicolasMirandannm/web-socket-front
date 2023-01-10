import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Panel from '../views/Panel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/Caller',
    name: 'Caller',
    component: () => import('../views/Caller.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/table.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
