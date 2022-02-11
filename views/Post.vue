<template>
<section class="section-tur">
  <div class="container">
    <div class="create-wrapper">
      <my-input v-model="title" label="Найменування турніру"/>
      <my-textarea v-model="description" label="Текст турниру"/>
      <my-button @click="onUpdate">Оновити</my-button>
    </div>
  </div>
</section>
</template>

<script>
import MyButton from '../components/ui/MyButton.vue'
import MyInput from '../components/ui/MyInput.vue'
// import MyButton from '../components/ui/MyButton.vue'
// import MyInput from '../components/ui/MyInput.vue'

export default {
  components: { MyInput, MyButton },
  data () {
    return {
      title: '',
      description: ''
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
      this.$router.push('/tournaments')
    }
  }
}
</script>

<style scoped>
 .create-wrapper{
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
 }
</style>
