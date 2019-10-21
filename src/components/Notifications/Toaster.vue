<template>
  <div class="toaster" :class="location">
    <transition-group name="notification-list" tag="div">
      <quick-toast
        v-for="n in notifications"
        :key="n.id"
        :title="n.title"
        :body="n.body || n.message"
        :type="n.type"
        :life="n.life || 8"
        :icon="n.icon"
        :img="n.img"
        @close="remove(n)"
      />
    </transition-group>
  </div>
</template>

<script>
import { GETNOTIFICATIONS } from "./NotificationService";
export default {
  props: {
    location: {
      type: String,
      validator(val) {
        return (
          ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(
            val
          ) != -1
        );
      },
      default: "top-right"
    }
  },
  name: "Toaster",
  data() {
    return {
      notifications: GETNOTIFICATIONS()
    };
  },
  watch: {
    notifications: {
      handler(val) {
        this.$set(this.notifications, val);
      },
      deep: true
    }
  },
  methods: {
    remove(toast) {
      let i = this.notifications.findIndex(n => n.id == toast.id);
      if (i == -1) {
        return;
      }
      this.notifications.splice(i, 1);
    }
  }
};
</script>


<style scoped>
.notification-list-enter,
.notification-list-leave-to {
  opacity: 0;
}

.toaster {
  position: fixed;
  display: inline;
}

.top-left {
  top: 1em;
  left: 1em;
}

.top-right {
  top: 1em;
  right: 1em;
}

.bottom-left {
  bottom: 1em;
  left: 1em;
}

.bottom-right {
  bottom: 1em;
  right: 1em;
}
</style>