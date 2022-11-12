<template>
  <div>
    <h1 class="text-4xl text-red-900 text-center mx-auto">Film à venir</h1>
    <DisplayFilm/>
  </div>
        
  
</template>

<script>

import DisplayFilm from './DisplayFilm.vue';

export default {
  name: 'ComingSoon',
  components: {DisplayFilm} ,

}
</script>

