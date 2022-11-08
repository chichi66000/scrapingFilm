<template>
  <div class="movies container mx-auto">
    <!-- change the month and years -->
    <!-- <div class="flex flex-col mx-auto sm:items-end py-5 px-1 sm:px-5 bg-gray-400 mx-auto">
      <label for="select_date" class="px-1 sm:px-3 font-bold">Select date</label>

      <div class="flex flex-row px-1 sm:px-3 flex-wrap ">
      <button @click="prev()" class="font-bold" role="button">Prev</button>
        
      <select @click="showDate()" v-model="selectDate" class="select_date" name="selectDate">
          <option disabled value="default">{{year}} - {{month}}</option>
          <option @click="chooseDate(index)" v-for="(date, index) in dateArray" :key="date" :value="`${date}`" >{{date}}</option>
         
      </select> 

      <button @click="next()" class="font-bold">Next</button>
      </div>

    </div> -->

    <!-- bloc for the movies -->
    <div v-for="(movie, index) in movies" :key="index" class="">
      <h2>{{movie.title}}</h2>
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
