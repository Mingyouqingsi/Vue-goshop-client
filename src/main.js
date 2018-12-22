import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader.vue'

/*定义全局组件*/
Vue.component('NavHeader',NavHeader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
