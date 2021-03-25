import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import jQuery from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import router from './router';
window.$ = jQuery;
window.jQuery = jQuery;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')