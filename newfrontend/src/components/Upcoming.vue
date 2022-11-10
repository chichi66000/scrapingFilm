<template>
  <div class="movies container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit">

    <!-- bloc for the movies -->
    <div v-for="movie in movies" :key="movie.filmId" class="border rounded mx-2 ">
      <div class="h-6/12 p-1 mx-auto my-auto ">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" alt="affiche film" class="mx-auto my-auto">
      </div>
      <div class="my-1 text-center h-3/12">
        <h2 class="p-1 text-center font-bold text-lg ">{{movie.title}}</h2>
        <p>Date sortie: {{movie.release_date}}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
// import axios from '../axios';
// import date from 'date-and-time';

export default {
  name: 'ComingSoon',
  data () {
    return {
    }
    
  },

  created () {
    // get films from server & store in vuex
    this.$store.dispatch('getMovies')
  },

  computed: {
    // get all films from store
    movies () {
      return this.$store.state.movies
    }

  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
