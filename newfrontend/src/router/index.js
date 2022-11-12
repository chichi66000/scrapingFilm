
import {createRouter, createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue'
import NowPlaying from '../components/NowPlaying.vue'
import TopRated from '../components/TopRated.vue'
import Upcoming from '../components/Upcoming.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/toprated',
    name: 'TopRated',
    component: TopRated
  },
  {
    path: '/nowplaying',
    name: 'NowPlaying',
    component: NowPlaying
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
