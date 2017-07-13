import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'
import UserList from '@/views/userList'

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
    }
  ]
})
