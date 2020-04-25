import Vue from 'vue';
import App from './views/App';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  mounted() {},
  components: {
    App,
  },
});
