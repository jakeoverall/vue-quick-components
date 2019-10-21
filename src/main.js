import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import QuickVue from "../dist/QuickVue.umd"
QuickVue.default.install(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
