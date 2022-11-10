<template>
  <div id="w-3/4">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/upcoming">Upcoming</router-link> 
      <router-link to="/top_rated">Top rated</router-link> 
      <router-link to="/now_playing">Now playing</router-link> 

    </div>
    <router-view/>

  </div>
</template>

<script>

export default {
  name: "App",
  
}

</script>

<style lang="css">

</style>
