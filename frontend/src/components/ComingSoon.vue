<template>
  <div class="movies container">
    <!-- change the month and years -->
    <div class="d-flex text-right py-5 mx-auto bg-gray-400 mx-auto">
      <button class="" role="button">Prev</button>

      <div class="">
        <label for="date">Select date</label>
        <select @click="showdate()" class="select_date ">
          <option  value="/movie-coming-soon/2021-08">08 - 2021</option>
          <!-- <option value="/movie-coming-soon/2021-08">09 - 2021</option>
          <option value="/movie-coming-soon/2021-08">10 - 2021</option> -->
        </select> 
      </div>

      <button class="">Next</button>


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
// import axios from '../axios'
export default {
  name: 'ComingSoon',
  data () {
    return {
      month: '',
      year: '',
      months: [
        ],
      nextyear: '',
    }
    
  },
  methods: {
    showdate (){
      let monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      let today = new Date();
      this.month = today.getMonth();    // we have to add +1 for the real month
      this.month = monthsName[this.month];
      var arr1 = monthsName.slice(monthsName.indexOf(this.month), monthsName.length);
      var arr2 = monthsName.slice(0, monthsName.indexOf(this.month));
      this.months = arr1.concat(arr2);
      console.log(this.months);


      this.year = today.getFullYear();
      this.nextyear = this.year + 1; 
      // add 12 months to the array of months from this current month
      // console.log(months);
      // console.log(this.month)  => OK 
      // console.log("year " + this.year)
      // console.log("next year " + this.nextyear);

      

    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

</style>
