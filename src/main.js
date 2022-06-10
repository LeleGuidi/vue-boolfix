import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// Flag icons 
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)
// flag icons 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
