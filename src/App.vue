<template>
  <div id="app">
    <toaster location="bottom-right"/>

    <button @click="addToast">add toast</button>

    <quick-view title="something"  tag="fa-globe" tag-color="white" color="red">
      <div class=" p-3">
        <h1>Things go here</h1>
      </div>
    </quick-view>

    <quick-collapse title="something">
      <h1>Things go here</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, ipsam! Quaerat reiciendis voluptatum doloribus laudantium odio iure nisi tempora iste accusantium repellendus consequatur non quos provident illo, laboriosam libero. Libero.</p>
    </quick-collapse>
  </div>
</template>

<script>
import { toastError, toastSuccess, toastWarning, toastInfo, toast } from "./components/Notifications/NotificationService";
export default {
  name: "app",
  components: {},
  methods: {
    addToast() {
      // this.$toastSuccess("funny it works")
      // toastError("This is an error");
      // toastSuccess("This is a Success")
      // toastWarning("This is a warning")
      // toastInfo("This is just an info", "With a custom title")
      // toast({
      //   title: "A custom title",
      //   img: "//placehold.it/200x200",
      //   body: "that was odd"
      // })
    }
  }
};
</script>