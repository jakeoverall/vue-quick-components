<template>
  <div>
    <transition-group name="notification-list" tag="div">
      <div
        v-for="(notification, i) in notifications"
        class="notification show action action"
        :style="{top: (i * 7)+'em'}"
        :key="'note'+i"
        @click="clear(notification)"
        @mouseenter="pause(notification, true)"
        @mouseleave="pause(notification, false)"
      >
        <div class="center alert" :class="'alert-'+getClass(notification)" :key="i">
          <div class="d-flex align-items justify-content-between">
            <small
              class="m-0 capitalize"
            >{{notification.type || 'Alert'}}: {{notification.title ? notification.title : notification.code}}</small>
            <i class="fa fa-fw fa-times text-light"></i>
          </div>
          <sub>{{notification.message || notification.error || notification.description}}</sub>
          <ul v-if="notification.errors">
            <li v-for="(err, key) in notification.errors" :key="key">
              {{key}}: {{Array.isArray(err) ? err.join('. ') : err }}
            </li>
          </ul>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  computed: {
    notifications() {
      return this.$store.state.NotificationStore.notifications;
    }
  },
  methods: {
    clear(notification) {
      this.$store.commit("clearNotification", notification);
    },
    getClass(notification) {
      notification.type = notification.type || "error";
      switch (notification.type.toLowerCase()) {
        case "error":
        case "danger":
          return "danger";
        case "success":
        case "complete":
          return "success";
        case "info":
          return "info";
        case "warning":
          return "warning";
        default:
          return "info";
      }
    },
    pause(notification, status){
      notification.paused = status;
    }
  }
};
</script>


<style scoped>
.notification-list-item {
  transition: all linear 1s;
  display: inline-block;
  margin-right: 10px;
}

.notification-list-enter,
.notification-list-leave-to {
  opacity: 0;
  right: -400px !important;
}

.notification-list-leave-active {
  position: absolute;
}

.notification {
  position: fixed;
  font-size: smaller;
  transition: all 0.3s linear;
  min-width: 300px;
  max-width: 70vw;
  padding: 0.7em;
  z-index: 99999999999999;
  display: block;
}

.notification.show {
  right: 10px;
  top: 10px;
}
.capitalize{
  text-transform: capitalize;
}
</style>