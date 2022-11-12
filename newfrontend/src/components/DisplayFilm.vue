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
    <div class="flex flex-row flex-wrap justify-evenly">
      <button v-if="(movies.length > 0 && this.obj.page > 1)" @click="prevPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32">Previous page</button>
      <button v-if="movies.length > 0" @click="nextPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32">Next page</button>
      <button v-else @click="prevPage()" class="font-bold bg-green-700 my-2 p-2 text-center text-white rounded-lg hover:bg-green-200 hover:text-black mx-2 w-32">Previous Page</button>

    </div>
    <div>Page: {{this.obj.page}}</div>
  </div>
</template>

<script>

export default {
    name: "DisplayFilm",
    data () {
        return {
            obj: {
                page: 1,
                url: ''
            },
            
        }
    },
    created () {
        var url = window.location.pathname;
        this.obj.url = url 
        console.log(this.obj);
        this.$store.dispatch('getMovies', this.obj)
    },

    computed: {
        movies () {
            return this.$store.state.movies
        }
    },

    methods: {
        nextPage() {
            this.obj.page += 1;
            console.log(this.obj.page, "nextPage");
            this.$store.dispatch('getMovies', this.obj)
        },

        prevPage () {
        if (this.obj.page > 1) {
            this.obj.page -= 1;
        }
        else {
            this.obj.page = 1
        }
        console.log(this.obj.page); 
        this.$store.dispatch('getMovies', this.obj)

        },
    }

}
</script>