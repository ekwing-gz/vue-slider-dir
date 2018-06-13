import Vue from 'vue'
import App from './App.vue'
import router from './router'
import slider from '../../dist/build'

Vue.use(slider)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
