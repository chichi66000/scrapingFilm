<template>
  <div class="movies container mx-auto">
    <!-- change the month and years -->
    <div class="flex flex-col mx-auto sm:items-end py-5 px-1 sm:px-5 bg-gray-400 mx-auto">
      <label for="select_date" class="px-1 sm:px-3 font-bold">Select date</label>

      <div class="flex flex-row px-1 sm:px-3 flex-wrap ">
      <button @click="prev()" class="font-bold" role="button">Prev</button>
        
      <select @click="showdate()" v-model="selectDate" class="select_date" name="select_date">
          <!-- <option disabled value="">Your date</option> -->
          <option @click="chooseDate(index)" v-for="(date, index) in dateArray" :key="date" :value="`/movie-coming-soon/${date}`" >{{date}}</option>
         
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
import axios from '../axios'
import moment  from "moment"

export default {
  name: 'ComingSoon',
  data () {
    return {
      month: '',
      year: '',
      nextyear: '',
      dateArray: [],
      selectDate: '',
      movies: [],
      dateChoosen: '',
    }
    
  },
  // beforeCreated () {
  //   this.showdate();
  //   this.chooseDate (0)
  //   this.selectDate = this.dateArray[0]

  // },
  created(){
    this.showdate();
    this.chooseDate (0);
    this.selectDate = "blala"

  },

  methods: {
    // show the month from nox to next year
    showdate() {
      var aujd = new Date();
      this.year = aujd.getFullYear();

      this.month = Date.now();
      this.nextyear = moment().add(12, 'months').calendar();
      
      // console.log(this.month);
      // console.log(this.nextyear);

      function getDates(startDate, stopDate) {
        let dateOption = []
        var currentDate = moment(startDate);
        var endDate = moment(stopDate);
        while (currentDate <= endDate) {
            dateOption.push( moment(currentDate).format('YYYY-MM') )
            currentDate = moment(currentDate).add(1, 'months');
        }
        return dateOption;
      }
      this.dateArray = getDates(this.month, this.nextyear);
      // console.log(this.dateArray);

    },

    // get the value of the month selected
    async chooseDate (index) {
      this.dateChoosen = this.dateArray[index];
      // console.log("date choosen " + this.dateChoosen); =>OK  

      await axios.get(`/api/films/${this.dateChoosen}`)
      .then( (response) => {
        // console.log(response);       OK
        this.movies = response.data.movies;
        // console.log(this.movies);    OK
      })
    },

    // back to the prev mpnth
    prev () {
    
      let prevMonth = moment(this.dateChoosen).subtract(1, "months").format("YYYY-MM");
      // console.log("now " + this.dateChoosen);
      // console.log("prev " + prevMonth);
      let index = this.dateArray.indexOf(prevMonth);
      console.log(index);
      this.chooseDate(index);
      this.selectDate = this.dateArray[index]


    },

    // go to the next mpnth
    next () {
      let nextMonth = moment(this.dateChoosen).add(1, "months").format("YYYY-MM");
      console.log("now " + this.dateChoosen);
      console.log("next " + nextMonth);
      let index = this.dateArray.indexOf(nextMonth);
      console.log(index);
      this.chooseDate(index);
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
