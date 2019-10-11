import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import store from '@/store'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jqwidgets-scripts/jqwidgets/styles/jqx.base.css';


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
