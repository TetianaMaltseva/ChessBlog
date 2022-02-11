<template>
<section class="section-tur">
  <div class="container">
    <div class="wrapper">
      <h1 class="title-tournament">{{title}} </h1>
      <div class="title-description">  {{description}}</div>
    <div>
      <my-button @click="showWindow">Рудагувати</my-button>
      <my-dialog v-model:show="windowVisible">
        <div class="create-wrapper">
          <my-input v-model="title" label="Найменування турніру"/>
          <my-textarea v-model="description" label="Текст турниру"/>
           <div class="visible-button">
          <my-button @click="onUpdate">Оновити</my-button>
          <my-button class="visible" @click="windowInvisible">Ні</my-button>
           </div>
        </div>
      </my-dialog>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import MyButton from '../components/ui/MyButton.vue'
import MyInput from '../components/ui/MyInput.vue'
import MyTextarea from '../components/ui/MyTextarea.vue'

export default {
  components: { MyInput, MyButton, MyTextarea },
  data () {
    return {
      title: '',
      description: '',
      windowVisible: false
    }
  },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  created () {
    const id = this.id || this.$route.params.id
    const postById = this.$store.getters['posts/postById']
    const editPost = postById(id)
    this.title = editPost.title
    this.description = editPost.description
  },
  methods: {
    onUpdate () {
      this.$store.dispatch('posts/updatePost', {
        title: this.title,
        description: this.description
      })
      this.windowVisible = false
      this.$router.push('/tournaments')
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
  max-width: 600px;
  align-items: center;
  max-width: 1200px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  margin-bottom: 15px;
  font-size: 18px;
 }
.visible-button {
  display: flex;
}
button.visible{
  margin: 25px 0 0 15px;
}
</style>
