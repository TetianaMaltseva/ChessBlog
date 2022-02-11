<template>
   <section class="section-tour">
    <div class="container">
      <div class="form-dialog">
        <form @submit.prevent action="#" id="msform">
          <h1 class="fs-title">Створити новий турнир</h1>
          <div id="v-model-basic" class="form-group">
            <my-input label='Назва турнiру' v-model='title' />
          </div>
          <div class="form-group">
            <my-textarea label='Опис турнiру' v-model='description' />
          </div>
          <div class="form-group">
            <button class="btn"
            @create="CreateTournam"
            >Створити</button>
          </div>
        </form>
      </div>
    </div>
  </section>

</template>
<script>
import MyInput from '../components/ui/MyInput.vue'
import MyTextarea from '../components/ui/MyTextarea.vue'
export default {
  components: { MyTextarea, MyInput },
  name: 'createtour',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    CreateTournam () {
      this.id = Date.now()
      this.$emit('create', this.title)
      this.$emit('create', this.description)
      this.title = ''
      this.description = ''
    }
  }
}
</script>
<style scoped>
.section-tour{
margin-bottom: 15px;
}
.form-dialog{
  align-items: center;
  max-width: 1200px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
}
 h1{
   align-items: center;
   font-size: 25px;
 }
</style>
