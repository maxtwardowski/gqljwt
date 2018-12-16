<template>
  <div id="app">
    <status />
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Status from './components/Status'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Status,
    Navbar
  }
}
</script>

<style>
</style>
