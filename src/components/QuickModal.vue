<template>
  <div class="quick-modal-slot">
    <transition name="fade">
      <div class="quick-modal quick-modal-container" :class="{open: open}" v-if="open">
        <div class="quick-modal-overlay" :class="{open: open}" @click="toggleModal"></div>
        <div
          class="quick-modal-card"
          :class="{open: open}"
          :style="{'width': width+'%','max-height': height+'%'}"
        >
          <div>
            <slot></slot>
          </div>
          <div class="m-0 p-0" v-if="showFooter">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "quick-modal",
  props: {
    toggle: {
      required: true,
      type: Number
    },
    fixed: Boolean,
    showFooter: Boolean,
    width: {
      type: Number,
      default: 90
    },
    height: {
      type: Number,
      default: 80
    }
  },
  data() {
    return { open: false, count: -1 };
  },
  watch: {
    toggle: {
      handler(val) {
        if (val < this.count) {
          this.closeModal();
        } else {
          this.openModal();
        }
        this.count = val;
        this.$emit("modalstate", this.open);
      }
    }
  },
  methods: {
    toggleModal() {
      this.open = !this.open;
      if (this.open) {
        this.openModal();
      } else {
        this.closeModal();
      }
    },
    openModal() {
      this.open = true;
      document.body.classList.add("no-scroll");
      this.$emit("modalstate", this.open);
    },
    closeModal() {
      this.open = false;
      document.body.classList.remove("no-scroll");
      this.$emit("modalstate", this.open);
    }
  },
  mounted() {
    document.addEventListener("keyup", e => {
      if (e.which == "27") {
        this.closeModal();
      }
    });
  },
  beforeDestroy() {
    this.closeModal();
  }
};
</script>

<style>
.quick-modal-container {
  opacity: 0;
  z-index: -99999;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s linear;
}
.quick-modal-container.open {
  opacity: 1;
  z-index: 99;
  pointer-events: initial;
}
.quick-modal.open {
  opacity: 1;
  z-index: 999999;
}
.quick-modal .modal-content .quick-modal .modal-content {
  height: unset;
  width: unset;
  top: unset;
  bottom: unset;
  left: unset;
  right: unset;
  position: unset;
}
.quick-modal-card {
  z-index: 100;
  min-height: 50%;
  max-width: 80%;
  background: transparent;
  opacity: 1;
  overflow: auto;
}

.quick-modal-overlay {
  opacity: 0;
  background: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.15s linear;
}
.quick-modal-overlay.open {
  z-index: 88;
  opacity: 0.45;
}
.quick-modal.p-0 > .modal-content {
  padding: 0 !important;
}
.quick-modal.dark > .modal-content {
  background: var(--dark);
  color: var(--light);
}
.quick-modal.light > .modal-content {
  color: var(--dark);
  background: var(--light);
}
</style>