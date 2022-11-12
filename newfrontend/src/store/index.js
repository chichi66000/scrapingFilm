
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
            axios.get(`/films/upcoming/page=1`)
            .then((response) => {
                
                let array = [];
                let films = response.data;
                for (let i = 0; i < films.length; i++) {
                    // trruncate text overviews
                     
                    if(films[i].title !== '') {
                        // films[i].overviews = truncateString(films[i].overviews, 200)
                        array.push(films[i])
                    }
                }
                
                context.commit('getMovies', array)
            })
            .catch(error=> {console.log(error);})
        }
    }
})
