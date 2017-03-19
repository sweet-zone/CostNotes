import Vue from 'vue'
import './sass/app.scss'

import App from './component/app.vue'
import router from './router'
import store from './store'

// for debugging
if (process.env.NODE_ENV !== 'production') Vue.config.debug = true

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
