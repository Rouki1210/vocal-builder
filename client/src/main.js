import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import CSS framework to decorate web UI
import 'semantic-ui-css/semantic.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

//import and config "flash-message" library
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 5000    //time unit: milliseconds (5000 ms = 5 seconds)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')