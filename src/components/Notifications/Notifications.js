// @ts-ignore
import QuickNotification from "./Notification.vue"
import NotificationStore from "./NotificationStore"
export default class Notifications {
  static install(Vue, store) {
    Vue.component('notifications', QuickNotification)
    store.registerModule('NotificationStore', NotificationStore)
  }
}