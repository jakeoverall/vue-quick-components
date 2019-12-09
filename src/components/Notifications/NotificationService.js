const notifications = []

export const GETNOTIFICATIONS = function () {
  return notifications
}

/**
 * Create a standard toast notification
 * @param {{title: string, body?: string, type?: string, icon?: string, img?: string}} notification 
 */
export const toast = function toast(notification) {
  if (!notification) { return }
  if (Array.isArray(notification)) {
    return notification.map(n => toast(n))
  }
  notification.id = getId()
  notifications.push(notification)
}

/**
 * Creates an Error Toast
 * @param {string} msg 
 * @param {string} title 
 */
export const toastError = function (msg, title = "Error") {
  toast({ title, body: msg, type: "danger", icon: "fa-times" })
}

/**
 * Creates a Success Toast
 * @param {string} msg 
 * @param {string} title 
 */
export const toastSuccess = function (msg, title = "Success") {
  toast({ title, body: msg, type: "success", icon: "fa-bell" })
}

/**
 * Creates a Warning Toast
 * @param {string} msg 
 * @param {string} title 
 */
export const toastWarning = function (msg, title = "Warning") {
  toast({ title, body: msg, type: "warning", icon: "fa-exclamation-triangle" })
}

/**
 * Creates an Info Toast
 * @param {string} msg 
 * @param {string} title 
 */
export const toastInfo = function (msg, title = "Info") {
  toast({ title, body: msg, type: "info", icon: "fa-comment" })
}

function getId() {
  return `Qid_${Math.floor(Math.random() * 1000000)}-${Math.floor(Math.random() * 1000000)}`
}