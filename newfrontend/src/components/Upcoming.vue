<template>
  <div class="mx-auto">
      <div class="movies container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit">

      <!-- bloc for the movies -->
      <div v-for="movie in movies" :key="movie.filmId" class="border rounded mx-2 ">
        <div class=" p-1 mx-auto my-auto ">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" alt="affiche film" class="mx-auto my-auto">
        </div>
        <div class="my-1 text-center ">
          <h2 class="p-1 text-center font-bold text-lg ">{{movie.title}}</h2>
          <p>Date sortie: {{movie.release_date}}</p>

        </div>
        <div class=" p-2 ">
        
          {{movie.overview}}
        </div>

      </div>
    

      <!-- <div class="flex justify-center" v-for="movie in movies" :key="movie.filmId">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          
          <img class="rounded-t-lg" :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" alt="affiche film">
          
          <div class="p-6 ">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{{movie.title}}</h5>
            <p>Date sortie: {{movie.release_date}}</p>
            <p class="text-gray-700 text-base mb-4 ">
              {{movie.overview}}
            </p>
          
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div> -->
      
    </div>
    <div class="text-center ">
      <button @click="nextPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black">Afficher plus</button>

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
      page: 1,
    }
    
  },

  created () {
    // get films from server & store in vuex
    this.$store.dispatch('getMovies', 1)
    
  },

  // mounted () {
  //   this.truncateOverview()
  // },

  computed: {
    // get all films from store
    movies () {
      // return this.$store.state.movies
      let movies = this.$store.state.movies;
      movies.map(function (item) {
        if( item.overview.length > 120) {
          item.overview = item.overview.substring(0, 120) + '...';
        }
        else {return }
        return item
      })
      // console.log(m);
      return movies
      
    }

  },

  methods: {
    nextPage() {
      this.page += 1;
      // console.log(this.page); 
      this.$store.dispatch('getMovies', this.page)
    }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
