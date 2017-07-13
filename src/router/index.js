import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',
        redirect: 'dashboard'
      }, {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }]
    }
  ]
})
