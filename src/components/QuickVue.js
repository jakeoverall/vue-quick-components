import Toaster from './Notifications/Toaster.vue'
import QuickCollapse from './QuickCollapse.vue'
import QuickModal from './QuickModal.vue'
import QuickView from './QuickView.vue'
import QuickToast from './QuickToast.vue'
import * as NotificationService from "./Notifications/NotificationService"

class QuickLoader {
  install(Vue) {
    Vue.component('toaster', Toaster)
    Vue.component('quick-modal', QuickModal)
    Vue.component('quick-collapse', QuickCollapse)
    Vue.component('quick-view', QuickView)
    Vue.component('quick-toast', QuickToast)
  }
}

export const QuickVue = new QuickLoader
export const ToastService = NotificationService
