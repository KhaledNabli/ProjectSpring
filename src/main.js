// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base, // $deep-purple.darken-1
    accent: '#7c4dff', // $deep-purple.accent-2
    secondary: '#f4511e', // $deep-orange.darken-1
    info: '#1976d2', // $blue.darken-2
    warning: '#ffa000', // $amber.darken-2
    error: '#d32f2f', // $red.darken-2
    success: '#388e3c' // $green.darken-2
  }
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})