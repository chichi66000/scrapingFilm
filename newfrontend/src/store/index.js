
import {createStore} from 'vuex'
import axios from '../axios'

export default createStore({
    state: {
        movies: [],
    },
    
    mutations: {
        getMovies (state, films) {
            state.movies = films
        }
    },
    actions: {
        getMovies (context, obj) {
            
            axios.get(`/films${obj.url}/page=${obj.page}`)
            .then((response) => {
                let array = [];
                let films = response.data;
                for (let i = 0; i < films.length; i++) {
                    // delete the films without title
                    if(films[i].title !== '') {
                        array.push(films[i])
                    }
                }
                
                context.commit('getMovies', array)
            })
            .catch(error=> {console.log(error);})
        }
    }
})

