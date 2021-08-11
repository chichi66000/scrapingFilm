<template>
  <div class="home">
    <h1 class="">New Movies
      <span>Coming Soon in </span>
      <span class="font-bold text-lg text-red-400">{{month}}</span>
      
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
