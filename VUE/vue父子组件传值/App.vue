<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import User from './components/User.vue'
export default {
  components: {
    "app-user": User
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
h1{
  font-size: 30px;
  font-weight: bold;
}
</style>
