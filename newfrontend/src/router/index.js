
import {createRouter, createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue'
import NowPlaying from '../components/NowPlaying.vue'
import TopRated from '../components/TopRated.vue'



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/top_rated',
    name: 'TopRated',
    component: TopRated
  },
  {
    path: '/now_playing',
    name: 'NowPlaying',
    component: NowPlaying
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
