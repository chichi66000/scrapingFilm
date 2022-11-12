<template>
  <div class="home">
    <h1 class="text-4xl text-red-900 text-center mx-auto">Films à venir</h1>
    
    <DisplayFilm />
  </div>
  
</template>

<script>
// @ is an alias to /src
import DisplayFilm from './DisplayFilm.vue'
// import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    DisplayFilm
  },
}
</script>
