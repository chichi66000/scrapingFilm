<template>
  <div class="movies container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-fit">

    <!-- bloc for the movies -->
    <div v-for="movie in movies" :key="movie.filmId" class="border rounded mx-2 ">
      <div class="h-6/12 p-1 mx-auto my-auto ">
        <img :src="`https://www.themoviedb.org/${movie.affiche}`" alt="affiche film" class="mx-auto my-auto">
      </div>
      <div class="my-1 text-center h-3/12">
        <h2 class="p-1 text-center font-bold text-lg ">{{movie.title}}</h2>
        <p>Date sortie: {{movie.dateSortie}}</p>
      </div>
    </div>
    
    
  </div>
</template>

<script>
// import axios from '../axios';
import date from 'date-and-time';

export default {
  name: 'ComingSoon',
  data () {
    return {
      // month: '',
      // year:'',
      // next_year: '',
      // dateArray: [],
      // dateChoosen: '',
      // selectDate: 'default',
      // movies: this.$store.state.movies,
    }
    
  },

  created () {
    // get films from server & store in vuex
    this.$store.dispatch('getMovies')
  },

  computed: {
    movies () {
      return this.$store.state.movies
    }

  },

  methods: {
    // show the month from now to next year => OK
    showDate() {
      const now = new Date();
      this.month = date.format(now, 'MM');
      this.year = date.format(now, 'YYYY');
      let nextyear = date.addYears(now, 1);
      this.next_year = date.format(nextyear, 'YYYY')
      // console.log("this month is now " +this.month);
      // console.log("this year is now " +this.year);
      // console.log("this next_year is now " +this.next_year);
      for (let i = 0; i < 12; i++) {
        let months = date.addMonths(now, 1 + i);
        let monthFormat = date.format(months, 'YYYY-MM');
        this.dateArray.push(monthFormat);
      }
    },

    // get the value of the month selected
    async chooseDate () {
      //  this.dateChoosen = this.dateArray[index];
      //  console.log(this.dateChoosen);
      
    },

    // button back to the prev month
    prev () {},

    // go to the next month => similar to the prev() function
    next () {},


  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
