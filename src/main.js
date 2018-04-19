import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import OrderAdd from './pages/OrderAdd.vue'
import OrderDelete from './pages/OrderDelete.vue'
import UserSearch from './pages/UserSearch.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)


const routes = [
  { path: '/order/add', component: OrderAdd },
  { path: '/order/delete', component: OrderDelete },
  { path: '/order/view', component: OrderAdd },
  { path: '/user/search', component: UserSearch },
  { path: '/user/audit', component: OrderAdd }
]

const router = new VueRouter({
  routes 
})


new Vue({
  el: '#app',
  router ,
  render: h => h(App)
}).$mount('#app')
