<template>
  <div id="app w-3/4">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
const app = new Vue({
  el: '#app',
  // fournit le store avec l'option `store`.
  // cela injectera l'instance du store dans tous les composants enfants.
  store,
  
})
</script>
<style lang="css">

</style>
