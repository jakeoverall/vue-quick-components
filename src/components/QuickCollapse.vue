<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <div
        @click="show = !show"
        class="d-flex align-items-center flex-grow action muted no-select"
        :class="titleClass"
        :style="titleStyle"
      >
        <i
          class="fa fa-fw mr-2"
          :class="{'fa-caret-right': !show, 'fa-caret-down': show}"
        ></i>
        <h5 class="m-0">{{title}}</h5>
      </div>
      <div v-if="add" class="action muted" @click="showForm = !showForm">
        <i class="fa fa-fw ml-1" :class="showForm ? addIcons.close : addIcons.open"></i>
      </div>
    </div>
    <div class="slide-down" :class="{'open flex-grow-1': showForm}">
      <slot name="form"></slot>
    </div>
    <div class="slide-down" :class="{'open flex-grow-1': show}">
      <slot v-if="show"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickCollapse",
  props: {
    title: { type: String, required: true },
    open: Boolean,
    add: Boolean,
    addIcons: {
      type: Object,
      default() {
        return { open: "fa-plus-square", close: "fa-minus-square" };
      }
    },
    titleClass: String,
    titleStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      show: false,
      showForm: false
    };
  },
  mounted() {
    this.show = this.open;
  }
};
</script>

<style>
.action{
  cursor: pointer;
  transition: all .3s linear;
}
.no-select{
  user-select: none;
}
.slide-down {
  overflow: hidden;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-down.open {
  transition: 0.3s ease-in;
  overflow: auto;
  max-height: 100vh;
}

.slide-down::-webkit-scrollbar{
  width: 0;
}

</style>