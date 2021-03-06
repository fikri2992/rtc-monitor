import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {
  store
} from './store/index';
import vuetify from './plugins/vuetify';
import Notifications from 'vue-notification'

Vue.use(Notifications)
// import Vuex from 'vuex'


Vue.config.productionTip = false
// Vue.use(Vuex)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
