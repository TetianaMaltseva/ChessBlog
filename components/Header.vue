<template>
<header id="header">
  <div class="nav">
    <div class="logo">
      <a href="/"><img src="img/icons/images/logo-bg.png"></a>
    </div>
    <nav>
      <div class="menu">
      <div class="page">
        <div :class="{active: activePath === '/'}"
        @click="goto('/')">Головна</div>
      </div>
      <div class="page">
        <div :class="tournamentsClass"
        @click="goto('/tournaments')">Турніри</div>
      </div>
      <div class="page">
        <div
        :class="createtourClass"
         v-if="$store.getters['user/isAuth']"
         @click="goto('/createtour')">Створити турнір</div>
      </div>
       <div class="page">
        <div :class="beginnerClass"
         @click="goto('/beginner')">Початківці</div>
      </div>
       <div class="page">
        <div :class="experiencedClass"
         @click="goto('/experienced')">Досвідчені</div>
      </div>
     </div>
    </nav>
    <div class="btn">
      <div v-if="$store.getters['user/isAuth']" >
        <button @click="showWindow">Вийти</button>

        <my-dialog v-model:show="windowVisible">
          <div class="visible-text">Ви точно хочете вийти?</div>
          <div class="visible-button">
          <button class="visible" @click="doLogout">Так</button>
          <button class="visible" @click="windowInvisible">Ні</button>
          </div>
        </my-dialog>
       </div>
       <div v-else>
        <button
        :class="mainAuthClass"
         @click="goto('/mainAuth')">Увійти</button>
          <button :class="mainRegistrClass"
         @click="goto('/mainRegistr')">Реєстрація</button>
      </div>

    </div>
  </div>
</header>
</template>
<script>
import mainRegistr from '@/components/MainRegistr.vue'
import MainAuth from '@/components/MainAuth.vue'
import { isAuth } from '@/App.vue'
import MyDialog from './ui/MyDialog.vue'

export default {
  components: { MyDialog },
  name: 'Header',
  data () {
    return {
      activePath: '/',
      isAuth,
      MainAuth,
      mainRegistr,
      isPathAbout: false,
      tournamentsClass: '',
      createtourClass: '',
      beginnerClass: '',
      experiencedClass: '',
      mainAuthClass: '',
      mainRegistrClass: '',
      windowVisible: false
    }
  },
  watch: {
    $route () {
      this.activePath = this.$route.path
      this.tournamentsClass = this.activePath === '/tournaments' ? 'active' : ''
      this.createtourClass = this.activePath === '/createtour' ? 'active' : ''
      this.beginnerClass = this.activePath === '/beginner' ? 'active' : ''
      this.experiencedClass = this.activePath === '/experienced' ? 'active' : ''
      this.mainAuthClass = this.activePath === '/mainAuth' ? 'active' : ''
      this.mainRegistrClass = this.activePath === '/mainRegistr' ? 'active' : ''
    }
  },
  methods: {
    goto (route) {
      this.$router.push(route)
    },
    showWindow () {
      this.windowVisible = true
    },
    windowInvisible () {
      this.windowVisible = false
    },
    // show () {
    //  this.shown = true
    // },
    // onOkClick () {
    //  this.$emit('okClick')
    //  this.show = false
    // },
    doLogout () {
      this.$store.dispatch('user/logout')
      this.windowVisible = false
    }
  }
}
</script>
<style scoped>
header{
  width: 100%;
  min-height: 150px;
  display: flex;
}
.active{
  cursor: pointer;
  color: #e6d00a !important;
}
.nav{
  width: 100%;
  background: #fff;
  min-height: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
}
.menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #837002;
}
.logo{
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 50px;
  max-height: 70px;
  flex-wrap: wrap;
}
.page{
  margin-left: 25px;
}
.btn{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}
.btn-log{
  padding: 3px 2px 3px 3px;
}
.btn-reg{
  text-align: end;
  padding: 3px 2px 3px 3px;
}
button{
  margin-left: 15px;
  cursor: pointer;
  background:#fff;
  border: 1px solid #e6d00a;
  min-width: 128px;
  min-height: 30px;
  font-size: 14px;
  vertical-align: middle;
  color: #837002;
}
button:hover{
  background: #f3e886;
}
.visible-text{
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
}
.visible-button {
  display: flex;

}

</style>
