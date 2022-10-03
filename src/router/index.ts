import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    component: () => import(/* webpackChunkName: "books" */ '@/modules/books/views/layout.vue'),
    children: [
      {
        path: '',
        name: 'Books',
        component: () => import(/* webpackChunkName: "books" */ '@/modules/books/views/index.vue'),
      }, 
      {
        path: 'create',
        name: 'CreateBooks',
        component: () => import(/* webpackChunkName: "books" */ '@/modules/books/views/create.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
