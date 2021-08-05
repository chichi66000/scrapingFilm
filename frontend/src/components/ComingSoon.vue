<template>
  <div class="movies container">
    <!-- change the month and years -->
    <div class="flex flex-col items-end p-5 bg-gray-400 mx-auto">
      <label for="select_date" class="">Select date</label>

      <div class="flex flex-row ">
      <button class="" role="button">Prev</button>
        
        <select @click="showdate()" v-model="selectDate" class="select_date" name="select_date">
          <!-- <option disabled value="">Your date</option> -->
          <option @click="chooseDate(index)" v-for="(date, index) in dateArray" :key="date" :value="`/movie-coming-soon/${date}`">{{date}}</option>
         
        </select> 
      <button class="">Next</button>
      </div>



    </div>

    <!-- bloc for the movies -->
    <div class="">
      <div class="d-flex justify-between">
        <img src="" alt="poster film"/>

        <div class="">
          <h2 class="">Titre</h2>
          <time datetime="90m">90mn</time>
          <p>
            <span>Animation</span>
            <span>Drama</span>
            <span>Thriller</span>

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
      selectDate: ""
    }
    
  },

  created(){
    this.showdate();
    this.selectDate = this.dateArray[0]
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
      let dateChoosen = this.dateArray[index];
      // console.log("date choosen " + dateChoosen);    OK

      await axios.post(`/api/films`, {dateChoosen: dateChoosen})
      .then( (response) => {
        console.log(response);
      })
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
