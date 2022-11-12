<template>
    <div>
        <h1>Now playing</h1>
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