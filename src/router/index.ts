// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 定义路由规则类型（RouteRecordRaw 是 Vue Router 提供的类型）
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'MapDemo',
    component: () => import('../views/MapDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite 环境变量（TS 需 vite/client 类型）
  routes
})

export default router