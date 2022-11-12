<template>
  <div id="">
    <div class="flex flex-col sm:flex-row sm:justify-between text-right bg-gray-200 p-2 mx-2 my-2 ">
      <router-link class="p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500" to="/">Home</router-link> 
      <router-link class="p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500" to="/upcoming">Upcoming</router-link> 
      <router-link class="p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500" to="/top_rated">Top rated</router-link> 
      <router-link class="p-2 my-1 mx-1 hover:text-green-500 focus:text-green-500 hover:bg-gray-500 min-w-fit text-cyan-500" to="/now_playing">Now playing</router-link> 
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
