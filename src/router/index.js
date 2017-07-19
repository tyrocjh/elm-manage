import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'
import UserList from '@/views/userList'
import UserDistribution from '@/views/graph/userDistribution'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: '首页',
        component: Dashboard
      }]
    },
    {
      path: '/manage',
      name: '数据管理',
      component: Layout,
      redirect: '/manage/userList',
      children: [{
        path: 'userList',
        name: '用户列表',
        component: UserList
      }]
    },
    {
      path: '/graph',
      name: '图表',
      component: Layout,
      redirect: '/graph/userDistribution',
      children: [{
        path: 'userDistribution',
        name: '用户分布',
        component: UserDistribution
      }]
    }
  ]
})
