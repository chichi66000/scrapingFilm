<template>
    <div>
        <h1 class="text-4xl text-red-900 text-center mx-auto">Films - Les mieux notés</h1>
        <DisplayFilm/>

    </div>
</template>

<script>
import DisplayFilm from './DisplayFilm.vue'

export default {
    name: "TopRated",
    components: {DisplayFilm},
}
</script>