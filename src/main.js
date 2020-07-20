import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import MovieOverview from './components/MovieOverview'
import Reviews from './components/Reviews'
import MoviesList from "./components/MoviesList";

import store from "./store/store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes =[
  {
    path: '/movie/:id', component: MovieOverview,
  },
  {
    path: '/reviews', component: Reviews
  },
  {
    path: '/movies', component: MoviesList
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
