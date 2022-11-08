// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     month: new Date().toISOString().substr(0, 19).replace('T', ' '),
//   },
//   mutations: {
//     chooseMonth(state, newDate) {
//       state.month = newDate
//     },
//   },
//   actions: {
//     chooseMonth(context, newDate) {
//       context.commit('chooseMonth', newDate)
//     }
//   },
//   modules: {
//   }
// })


import {createStore} from 'vuex'
import axios from '../axios'

export default createStore({
    state: {
        // month: new Date().toISOString().substring(0, 10),
        movies: [],
        
    },
    
    mutations: {
        getMovies (state, films) {
            state.movies = films
        }
    },
    actions: {
        // getMovies (context, films) {
        //     context.commit('getMovies', films)
        // }
        getMovies (context) {
            axios.get(`/films`)
            .then((response) => {
                // console.log(response.data);
                // stock in list of movies
                // this.movies = response.data;
                // // console.log(this.movies);
                // this.$store.dispatch('getMovies', response.data);
                context.commit('getMovies', response.data)
            })
            .catch(error=> {console.log(error);})
        }
    }
})

