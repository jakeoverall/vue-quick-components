import Vue from 'vue'
import App from './App.vue'
import { QuickVue } from "@bcwdev/quickvue"
Vue.config.productionTip = false
QuickVue.install(Vue)




new Vue({
  render: h => h(App),
}).$mount('#app')
