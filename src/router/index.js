import Vue from 'vue'
import Router from 'vue-router'
import { route } from '../utils/route'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    route('/login', 'login', 'pages/login'),
    route('/', null, 'layouts/main', [
      route('/', 'home', 'pages/home', null, 'auth'),
      route('/users', 'users', 'pages/users', null, 'auth'),
      route('/tabs', null, 'pages/tabs', [
        route('one', 'tabs.one', 'pages/tabs/items/one', null, 'auth'),
        route('two', 'tabs.two', 'pages/tabs/items/two', null, 'auth'),
        route('three', 'tabs.three', 'pages/tabs/items/three', null, 'auth')
      ])
    ])
  ]
})
