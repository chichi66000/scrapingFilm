<template>
  <div class="home">
    <h1 class="font-bold text-3xl mx-auto my-5 text-center">New Movies
      <span>Coming Soon in </span>
      <span class="text-red-400">{{month}}</span>
      
    </h1>

    <ComingSoon />
  </div>
</template>

<script>
// @ is an alias to /src
import ComingSoon from '../components/ComingSoon.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ComingSoon
  },
  computed: {
      ...mapState ( {
        month: state => state.month
      } )
    }
}
</script>
