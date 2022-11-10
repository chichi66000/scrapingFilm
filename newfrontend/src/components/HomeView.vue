<template>
  <div class="home">
    <h1 class="font-bold text-3xl text-red-300 mx-auto my-5 text-center">
      Films à venir
      <!-- <span class="text-red-400">{{month}}</span> -->
      
    </h1>

    <Upcoming />
  </div>
  
</template>

<script>
// @ is an alias to /src
import Upcoming from './Upcoming.vue'
// import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Upcoming
  },
  // computed: {
  //     ...mapState ( {
  //       month: state => state.month
  //     } )
  //   }
}
</script>
