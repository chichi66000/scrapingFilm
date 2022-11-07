<template>
  <div class="movies container mx-auto">
    <!-- change the month and years -->
    <div class="flex flex-col mx-auto sm:items-end py-5 px-1 sm:px-5 bg-gray-400 mx-auto">
      <label for="select_date" class="px-1 sm:px-3 font-bold">Select date</label>

      <div class="flex flex-row px-1 sm:px-3 flex-wrap ">
      <button @click="prev()" class="font-bold" role="button">Prev</button>
        
      <select @click="showdate()" v-model="selectDate" class="select_date" name="selectDate">
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

// <script>
// import axios from '../axios'
// import moment, {months}  from "moment"
// // import store from '../store/index'
// export default {
//   name: 'ComingSoon',
//   data () {
//     return {
//       month: '',
//       year:'',
//       nextyear: '',
//       dateArray: [],
//       movies: [],
//       dateChoosen: '',
//       selectDate: 'default',
//     }
    
//   },

//   created(){
//     this.showdate();
//     this.chooseDate (0);
    
//   },

//   methods: {
//     // show the month from now to next year => OK
//     showdate() {
//       // take the value of this month and this year 
//       var aujd = moment();
//       console.log("auj " + aujd);
//       this.year = moment().year();
//       console.log("year " + this.year);
//       this.month = months(aujd, "MM");
//       console.log("month " + this.month );
      
//       this.nextyear = moment().add(12, 'months').calendar();
//       console.log("next year " + this.nextyear);
//       // the function to calculate 12 months from 1 date in using momentjs
//       function getDates(startDate, stopDate) {
//         let dateOption = []
//         var currentDate = moment(startDate);
//         var endDate = moment(stopDate);
//         while (currentDate <= endDate) {
//             dateOption.push( moment(currentDate).format('YYYY-MM') )
//             currentDate = moment(currentDate).add(1, 'months');
//         }
//         return dateOption;
//       }
//       // call this function to get the months from now to next year and stock in dateArray
//       this.dateArray = getDates(aujd, this.nextyear);
      
//     },

//     // get the value of the month selected
//     async chooseDate (index) {
//       this.dateChoosen = this.dateArray[index];
//       console.log("month " + this.dateArray[index])
//       // send to the server to get list of movies
//       await axios.get(`/films/${this.dateChoosen}`)
//       .then( (response) => {
//         // stock in list of movies
//         this.movies = response.data.movies;
//         // change the state of vuex with the month
//         this.$store.dispatch('chooseMonth', this.dateChoosen)
        
//       })
//     },

//     // button back to the prev month
//     prev () {
//       // get the month from the dateChoosen-1
//       let prevMonth = moment(this.dateChoosen).subtract(1, "months").format("YYYY-MM");
//       console.log("prev " + prevMonth);
//       // get the index of this month in the dateArray
//       let index = this.dateArray.indexOf(prevMonth);
      
//       // if index <0 => the films has all coming out already => alert + the film coming in this month
//       if(index < 0) {
//         alert("Please choose a valid month for Film Coming Soon");
        
//       }
//       // if we've been farther in the futur, we can come back to prev month
//       else {
//         // then call the function chooseDate to get the list of movies
//         this.chooseDate(index);
//         // and show the value of the month choosen
//         this.selectDate = this.dateArray[index];
//         // change the store of vuex
//         this.$store.dispatch('chooseMonth', this.selectDate)

//       }
//     },

//     // go to the next month => similar to the prev() function
//     next () {
//       let nextMonth = moment(this.dateChoosen).add(1, "months").format("YYYY-MM");
//       let index = this.dateArray.indexOf(nextMonth);
      
//       // if the month more than  year => too far to get the film
//       if (index < 0) {
//         alert("Please choose another month; there's no film yet");
        
//       }
//       else {
//         this.chooseDate(index)
//         // and show the value of the month choosen
//         this.selectDate = this.dateArray[index];
//         // change the store of vuex
//         this.$store.dispatch('chooseMonth', this.selectDate)
//       }
      
//     }
//   },
  
// }
// </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
