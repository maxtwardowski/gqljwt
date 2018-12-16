import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { createProvider } from './vue-apollo'

import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import UserFetcher from './components/UserFetcher.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userfetcher',
    component: UserFetcher
  },
  {
    path: '/logout',
    component: Logout
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
