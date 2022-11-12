<template>
    <div>
        <h1>Top Rated</h1>
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