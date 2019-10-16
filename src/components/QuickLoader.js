import QuickCollapse from './QuickCollapse.vue'
import QuickModal from './QuickModal.vue'
import QuickView from './QuickView.vue'
import QuickToast from './QuickToast.vue'

class QuickLoader {
  install(Vue, options) {
    Vue.component('quick-modal', QuickModal)
    Vue.component('quick-collapse', QuickCollapse)
    Vue.component('quick-view', QuickView)
    Vue.component('quick-toast', QuickToast)
  }
}

export default new QuickLoader