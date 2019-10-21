import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import QuickLoader from "./components/QuickVue"
QuickLoader.install(Vue)


new Vue({
  render: h => h(App),
}).$mount('#app')
