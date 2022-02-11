<template>
   <section class="section-tour">
    <div class="container">
       <div class="creat">
          <h1 class="fs-title">Створити новий турнир</h1>
          <div class="create-wrapper">
            <div id="v-model-basic" class="form-group">
            <my-input
              type='text'
              label='Назва турнiру'
              v-model='title' />
            </div>
           <div class="form-group">
            <my-textarea label='Опис турнiру' v-model='description' />
           </div>
           <div class="form-group">
            <my-formbutton @click="onAdd" class="create-btn">Створити</my-formbutton>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script>
import MyFormbutton from '../components/ui/MyFormbutton.vue'
import MyInput from '../components/ui/MyInput.vue'
import MyTextarea from '../components/ui/MyTextarea.vue'
export default {
  components: { MyTextarea, MyInput, MyFormbutton },
  name: 'createtour',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    onAdd () {
      console.log(this.description)
      this.$store.dispatch('posts/createPost', { title: this.title, description: this.description })
      this.$router.push('/tournaments')
    },
    onUpdate () {
      this.$store.dispatch('posts/updatePost', { id: 1, title: this.title, description: this.description })
      this.$router.push('/tournaments')
    }
  }
}
</script>
<style scoped>
.section-tour{
  width: 100%;
  padding: 150px 0 100px;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fefcea+12,f1da36+82,f1da36+82,f1da36+98 */
  background: rgb(254,252,234); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(254,252,234,1) 12%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 98%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=0 ); /* IE6-9 */
  font-size: 16px;
}
/*.creat{
  align-items: center;
  max-width: 500px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
} */
 h1{
   align-items: center;
   font-size: 25px;
   margin: 0 auto;
   padding-bottom: 25px;
 }
 .create-wrapper{
   max-width: 600px;
   margin: 0 auto;
 }
</style>
