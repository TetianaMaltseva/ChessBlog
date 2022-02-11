import { createStore } from 'vuex'
import userStore from './user'
import postsStore from './posts'

export default createStore({
  modules: {
    user: userStore,
    posts: postsStore
  }
})
