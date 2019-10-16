<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" @mouseenter="interval = 0" @mouseleave="interval = 100">
    <div class="toast-header">
      <div class="toast-icon rounded mr-2" :class="type">
        <i v-if="icon" class="fa fa-fw text-light" :class="icon"></i>
        <img v-if="img" :src="img" class="rounded" style="object-fit: cover" height="20" width="20" />
      </div>
      <strong class="mr-auto">{{title}}</strong>
      <small>{{day}} {{time}}</small>
      <button type="button" class="ml-2 close" @click="close" data-dismiss="toast" aria-label="Close">
        <small aria-hidden="true">&times;</small>
      </button>
    </div>
    <div class="toast-body text-left">{{body}}</div>
    <div class="progress" style="height: 1px;" v-if="life">
      <div class="progress-bar" :class="`bg-${type}`" role="progressbar" :style="{width: lifePercent}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    body: { type: String },
    icon: { type: String },
    img: { type: String },
    type: { type: String, default: "secondary" },
    life: { type: Number },
    createdAt: {
      type: Number,
      default() {
        return Date.now();
      }
    }
  },
  mounted(){
    setTimeout(() => {
      this.$el.classList.add("show")
    },100)
    this.setLife()
  },
  data() {
    return {
      lifetime: 0,
      interval: 100
    };
  },
  computed: {
    language(){
      try{
        return navigator.language
      }catch(e){
        return "en-US"
      }
    },
    day() {
      return new Date(this.createdAt).toLocaleDateString(this.language, {
        month: "short",
        day: "numeric"
      });
    },
    time() {
      return new Date(this.createdAt).toLocaleTimeString(this.language, {
        timeStyle: "short"
      });
    },
    lifePercent(){
      return this.lifetime / this.life * 100 + "%"
    }
  },
  methods: {
    close(){
      // Notification.requestPermission().then(function(result) {
        //   console.log(result);
      // });
      let n = new Notification(this.title, {body: this.body})
      this.$el.classList.remove("show")
      this.$emit("close")
    },
    setLife(){
      if(this.life){
        let i = setInterval(() => {
        this.lifetime += (this.interval / 1000)
        if(this.lifetime >= this.life){
          clearInterval(i);
          this.close()
        }
      }, this.interval)
    }
  }
  }
};
</script>

<style>
.toast:not(.show){
  transition: all .3s linear;
  max-height: 0;
  margin-bottom: 0;
  user-select: none;
  pointer-events: none;
}
.toast.show{
  opacity: 1;
  max-height: 100vh;
  pointer-events: all;
  user-select: unset;
  margin-bottom: .75rem;
}
.toast-icon {
  height: 20px;
  width: 20px;
  display: inline-block;
}

.toast-icon{
  background-color: var(--secondary);
}
.toast-icon.success {
  background-color: var(--success);
}
.toast-icon.info {
  background-color: var(--info);
}
.toast-icon.warning {
  background-color: var(--warning);
}
.toast-icon.error,
.toast-icon.danger {
  background-color: var(--danger);
}
</style>