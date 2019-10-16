<template>
  <div id="app">
    <div class="toaster">
      <quick-toast title="Hello" body="voluptatibus?" :life="6"/>
      <quick-toast title="Hello" body="voluptatibus?" icon="fa-book" />
      <quick-toast title="Error" body="It would appear that something broke" icon="fa-times" type="danger" :life="12" />
      <quick-toast title="Hello" body="voluptatibus?" icon="fa-globe" type="info"/>
      <quick-toast title="Hello" body="voluptatibus?" icon="fa-check" type="success" :life="8"/>
      <quick-toast title="Hello" body="voluptatibus?" img="https://atlasworlds.blob.core.windows.net/public/entity-images/entity-23487365-e0f9-495e-bfd4-b6240d09661a.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.toaster{
  position: fixed;
  bottom: 1em;
  right: 1em;
}

</style>
