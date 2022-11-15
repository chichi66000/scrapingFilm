<template>

    <div class="bg-gray-900 text-gray-100 py-3 px-6 md:flex justify-between items-center">
        <div class=" md:hidden right-6 top-1 cursor-pointer" @click="MenuOpen()">
            <svg class="h-8 w-8 text-teal-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg> 
        </div>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-4 bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open? 'block' : 'hidden']">
            <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
                <a :href="link.link" class="hover:text-teal-500 hover:font-bold hover:px-6 focus:text-teal-500 focus:font-bold focus:px-6">{{link.name}}</a>
            </li>
        </ul>

    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "NavBar",
    setup () {
        let open = ref(false);
        let Links = [
            {name: "Home", link: "/"},
            {name: "Upcoming", link: "/upcoming"},
            {name: "Top Rated", link: "/toprated"},
            {name: "Now playing", link: "/nowplaying"},
        ]

        function MenuOpen() {
            open.value = !open.value
        }
        return {Links, open, MenuOpen};
    }
}
</script>