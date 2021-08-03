<template>
  <div class="home">
    <h1 class="">New Movies
      <span>Coming Soon</span>
    </h1>

    <ComingSoon />
  </div>
</template>

<script>
// @ is an alias to /src
import ComingSoon from '../components/ComingSoon.vue'

export default {
  name: 'Home',
  components: {
    ComingSoon
  }
}
</script>
