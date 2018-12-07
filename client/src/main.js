import io from 'socket.io-client'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const socket = io(location.host)
socket.on('update', (container) => {
  // container: { id:uuidv4, interval:number, type:string, order?:number }
  app.$router.replace(container.type)
  console.log(container)
})
