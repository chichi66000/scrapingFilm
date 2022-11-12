<template>
    <div>
        <h1 class="text-4xl text-red-900 text-center mx-auto">Films du moment</h1>
        <DisplayFilm/>

    </div>
</template>

<script>
import DisplayFilm from './DisplayFilm.vue'

export default {
    name: "NowPlaying",
    components: {DisplayFilm},
}
</script>