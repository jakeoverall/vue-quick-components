import Toaster from './Notifications/Toaster.vue'
import QuickCollapse from './QuickCollapse.vue'
import QuickModal from './QuickModal.vue'
import QuickView from './QuickView.vue'
import QuickToast from './QuickToast.vue'
import { toast, toastSuccess, toastInfo, toastWarning, toastError } from "./Notifications/NotificationService"

const QuickVue = {
  install(Vue) {
    Vue.component('toaster', Toaster)
    Vue.component('quick-modal', QuickModal)
    Vue.component('quick-collapse', QuickCollapse)
    Vue.component('quick-view', QuickView)
    Vue.component('quick-toast', QuickToast)
  },

  /**
  * A simple debounce function timeout is (ms)
  * @param {function} callback 
  * @param {number} timeout 
  */
  debounce(callback, timeout) {
    let id;
    return (...args) => {
      clearTimeout(id);
      return id = setTimeout(() => callback(...args), timeout);
    };
  },
  toast,
  toastError,
  toastWarning,
  toastSuccess,
  toastInfo
}

export default QuickVue

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(QuickVue)
}