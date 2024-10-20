import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

export const constantRoutes = [{
  path: '/',
  component: Layout
}]

// 创建路由实例
const createRouter = () => new VueRouter({
  // mode: 'history', // require service support 模式
  routes: constantRoutes
})

const router = createRouter()

export default router