import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'
import UserList from '@/views/userList'
import UserDistribution from '@/views/graph/userDistribution'
import Edit from '@/views/edit'
import Explain from '@/views/Explain'

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
    },
    {
      path: '/edit',
      name: '编辑',
      component: Layout,
      redirect: '/edit/editor',
      children: [{
        path: 'editor',
        name: '文本编辑',
        component: Edit
      }]
    },
    {
      path: '/explain',
      name: '说明',
      component: Layout,
      redirect: '/explain/explain',
      children: [{
        path: 'explain',
        name: '说明',
        component: Explain
      }]
    }
  ]
})
