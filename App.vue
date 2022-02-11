<template>
  <div id="app">
    <Header/>
  <!--  <Main v-if="$store.getters['user/isAuth']"/> -->
  <!--  <MainAuth v-else/> -->
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
// import MainAuth from '@/components/MainAuth.vue'

export const isAuth = false
export const isNotAuth = true

export default {
  data () {
    return {
      isAuth,
      isNotAuth
    }
  },
  name: 'App',
  components: {
    Header,
    Main,
    //  MainAuth,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
