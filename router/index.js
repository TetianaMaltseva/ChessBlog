import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tournaments from '@/views/Tournaments.vue'
import Post from '@/views/Post.vue'
import Createtour from '@/views/Createtour.vue'
import Beginner from '@/views/Beginner.vue'
import Experienced from '@/views/Experienced.vue'
import Tournament from '@/components/Tournament.vue'
import MainAuth from '@/components/MainAuth.vue'
import MainRegistr from '@/components/MainRegistr.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createtour',
    name: 'Createtour',
    component: Createtour,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/mainAuth',
    name: 'MainAuth',
    component: MainAuth
  },
  {
    path: '/mainRegistr',
    name: 'MainRegistr',
    component: MainRegistr
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  {
    path: '/tournaments/:id',
    component: Tournament
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },

  {
    path: '/beginner',
    name: 'Beginner',
    component: Beginner
  },
  {
    path: '/experienced',
    name: 'Experienced',
    component: Experienced
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
