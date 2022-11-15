<template>
  <div id="">
    <NavBar />
    <router-view/>

  </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
export default {
  name: "App",
  components: {NavBar},
}

</script>

<style lang="css">

</style>
