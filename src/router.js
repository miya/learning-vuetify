import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import User from './components/User'
import Pick from './components/Pick'
import Study from './components/Study'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/pick',
      name: 'Pick',
      component: Pick
    },
    {
      path: '/study/:questionName/:questionLevel',
      name: 'Study',
      component: Study
    }
  ]
})
