<template>
<div class="wrapper">
   <section class="section-tour">
      <strong class="totalTour">Всього турниров{{ $store.getters["posts/count"] }}</strong>
      <div class="tournamentWrapper">
        <div class="tournamentsPost" v-for="post in postArray "
          :key="post.id">
          <h1 class="title-tournament">  {{post.title}}</h1>
          <div class="title-description">  {{post.description}}</div>
           <!-- <Tournament :id='post.id'>pass</Tournament></div>-->
          <div class="settingsBar">
            <router-link :to="`/tournaments/${post.id}`" >Перейти</router-link>
             <my-button @click="showWindow">Видалити</my-button>
             <my-dialog v-model:show="windowVisible">
             <div class="visible-text">Ви точно хочете видалити цей турнир?<p> Відновити його буде неможливо.</p></div>
             <div class="visible-button">
               <button class="visible" @click="doDelete(post.id)">Так</button>
               <button class="visible" @click="windowInvisible">Ні</button>
              </div>
             </my-dialog>
          </div>
       </div>
     </div>
  </section>
</div>
</template>

<script>
// import Tournament from '../components/Tournament.vue'
import MyDialog from '../components/ui/MyDialog.vue'
import MyButton from '../components/ui/MyButton.vue'

export default {
  data () {
    return {
      windowVisible: false
    }
  },
  components: {
    MyDialog,
    MyButton
  },
  computed: {
    postArray () {
      return this.$store.getters['posts/all']
    }
  },
  methods: {
    doDelete (id) {
      console.log(id)
      // this.id = id
      this.$store.dispatch('posts/deletePosts', id)
      this.windowVisible = false
      // this.postsArray.splice(post.id)
    },
    showWindow () {
      this.windowVisible = true
    },
    windowInvisible () {
      this.windowVisible = false
    }
  }
}
</script>

<style scoped>
.wrapper{
  width: 100%;
  padding: 30px 0 100px;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fefcea+12,f1da36+82,f1da36+82,f1da36+98 */
  background: rgb(254,252,234); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(254,252,234,1) 12%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 98%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=0 ); /* IE6-9 */
}
.totalTour{
  margin:0 0 0 40px;
  font-size: 18px;
}
.tournamentWrapper{
  margin: 20px 0 20px 0;
}
 .tournamentsPost{
  font-size: 18px;
  align-items: center;
  max-width: 1000px;
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  margin-bottom: 15px;
}
.settingsBar{
  display: flex;
  align-items: center;
}
a{
  margin-top: 25px;
  font-size: 18px;
  text-decoration: none;
  color: #000;
}
a:hover{
  color:#e6d00a ;
}
.btn-danger{
  margin-top: 0!important;
}
 h1{
   align-items: center;
   font-size: 25px;
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
button.visible{
  margin: 25px 0 0 15px;
}
</style>
