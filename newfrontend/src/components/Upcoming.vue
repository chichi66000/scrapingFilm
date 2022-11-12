<template>
  <div class="mx-auto">
      
    <div v-for="movie in movies" :key="movie.filmId" class="flex flex-col justify-evenly sm:flex-row border rounded-lg my-5 p-1 mx-2 p-2 sm:p-5  ">
      <div class="w-50 sm:w-72 p-1 mx-auto sm:mx-3">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" class=" mx-auto object-contain"/>
      </div>
      
      <div class="flex flex-col p-1 sm:p-5 mx-auto flex-wrap w-full sm:w-3/4 md:1/2">
        <h2 class="font-bold text-lg text-red-400 mx-auto px-1 sm: px-5" >{{movie.title}}</h2>

        <div class="flex justify-between flex-wrap">
          {{movie.release_date}}
        </div>
        
        <p class="px-1 mx-auto">{{movie.overview}}</p>

      </div>

    </div>

    <!-- Button prev & next -->
    <div class="flex flex-row justify-between">
      <button v-if="(movies.length > 0 && this.page > 1)" @click="prevPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 ">Previous page</button>
      <button v-if="movies.length > 0" @click="nextPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2">Next page</button>
      <button v-else @click="prevPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 ">Previous Page</button>

    </div>
    <div>Page: {{this.page}}</div>
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
    films() {
      return this.$store.state.movies;
    },

    // get all films from store
    movies () {
      return this.$store.state.movies
      // let m = this.$store.state.movies;
      // let array = [];
      // m.map(function (item) {
      //   if( item.overview.length > 120) {
      //     item.overview = item.overview.substring(0, 120) + '...';
      //   }
      //   else {return }
      //   array.push(item)
      //   return array
      // })
      // console.log(array);
      // return array
      
    }

  },

  methods: {
    nextPage() {
      this.page += 1;
      console.log(this.page); 
      this.$store.dispatch('getMovies', this.page)
    },

    prevPage () {
      if (this.page > 1) {
        this.page -= 1;
      }
      else {
        this.page = 1
      }
      console.log(this.page); 
      this.$store.dispatch('getMovies', this.page)

    },

    allText (id) {
      console.log(id);
      console.log(this.films);
    }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
