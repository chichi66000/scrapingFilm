<template>
  <div class="movies container mx-auto">
    <!-- change the month and years -->
    <div class="flex flex-col mx-auto sm:items-end py-5 px-1 sm:px-5 bg-gray-400 mx-auto">
      <label for="select_date" class="px-1 sm:px-3 font-bold">Select date</label>

      <div class="flex flex-row px-1 sm:px-3 flex-wrap ">
      <button @click="prev()" class="font-bold" role="button">Prev</button>
        
      <select @click="showDate()" v-model="selectDate" class="select_date" name="selectDate">
          <option disabled value="default">{{year}} - {{month}}</option>
          <option @click="chooseDate(index)" v-for="(date, index) in dateArray" :key="date" :value="`${date}`" >{{date}}</option>
         
      </select> 

      <button @click="next()" class="font-bold">Next</button>
      </div>

    </div>

    <!-- bloc for the movies -->
    <div v-for="(movie, index) in movies" :key="index" class="">
      <div class="flex flex-col justify-evenly sm:flex-row border rounded-lg my-5 p-1 mx-1 sm:p-5  ">
        <div class="w-40 sm:w-72 p-1 mx-auto sm:mx-3">
          <img :src="`${movie.img}`" alt="poster film" class=" mx-auto object-contain"/>
        </div>
        

        <div class="flex flex-col p-1 sm:p-5 mx-auto flex-wrap w-full sm:w-3/4 md:1/2">
          <h2 class="font-bold text-lg text-red-400 mx-auto px-1 sm: px-5" >{{movie.title}}</h2>

          <div class="flex justify-between flex-wrap">
            <time v-if="movie.time" :datetime="`${movie.time}`" class="px-1 sm:px-3">{{movie.time}}</time>
            <p v-for="(genre, idx) in movie.genres" :key="`genre_${idx}`" class="font-bold px-1 sm:px-3">
              <span class="px-1 sm:px-3">{{genre}}</span>
            </p>
          </div>
          
          <p class="px-1 mx-auto">{{movie.description}}</p>

          <p><span class="font-bold">Directeur:</span> {{movie.directeur}}</p>
          <p >
            <span class="font-bold">Stars:</span>
            <span v-for="(star, i) in movie.stars" :key="`star_${i}`" class="px-1 sm:px-3 ">{{star}}</span>
          </p>
        </div>

      </div>
    </div>
    
    
  </div>
</template>

<script>
import axios from '../axios';
import date from 'date-and-time';

export default {
  name: 'ComingSoon',
  data () {
    return {
      month: '',
      year:'',
      next_year: '',
      dateArray: [],
      movies: [],
      dateChoosen: '',
      selectDate: 'default',
    }
    
  },

  created () {
    this.showDate();

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
    async chooseDate (index) {
       this.dateChoosen = this.dateArray[index];
      //  console.log(this.dateChoosen);
      await axios.get(`/films/${this.dateChoosen}`)
      .then((response) => {
        // stock in list of movies
        this.movies = response.data.movies;
        console.log(this.movies);
        // change the state of vuex with the month
        // this.$store.dispatch('chooseMonth', this.dateChoosen)
        
      })
      .catch(error => {console.log(error);})
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
