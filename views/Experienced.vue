<template>
  <section class="section-experienced">
    <div class="container">
      <div class="post">
        <div class="form-post">
          <form action="#" id="msform">
             <h1 class="fs-title">Тестування для досвідчених гравців</h1>
             <ol>
               <li>
                 <div class="form-question">
                   <img src="#">
                   <div class="text">
                     Ничего смешного нет!!!!
                   </div>
                   <div class="radio">
                      <my-radio />
                    </div>
                  </div>
               </li>
               <li>
                  <img src="#">
                  <div class="text">
                     Ничего смешного нет!!!!
                  </div>
                  <div class="radio">
                    <my-radio />
                  </div>
               </li>
               <li>
                  <img src="#">
                  <div class="text">
                    Ничего смешного нет!!!!
                  </div>
                  <div class="radio">
                    <my-radio />
                  </div>
               </li>
               <li>
                  <img src="#">
                  <div class="text">
                    Ничего смешного нет!!!!
                  </div>
                  <div class="radio">
                    <my-radio />
                  </div>
               </li>
             </ol>
              <div class="form-group">
                <my-button>Відправити</my-button>
              </div>
           </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from '../components/ui/MyButton.vue'
export default {
  components: { MyButton },
  name: 'experienced',
  data () {
    return {

    }
  },
  methods: {
    onAdd () {
      this.$router.push('#v-model-basic')
    }
  }
}
</script>

<style scoped>
.section-experienced{
  width: 100%;
  padding: 150px 0 100px;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fefcea+12,f1da36+82,f1da36+82,f1da36+98 */
  background: rgb(254,252,234); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(254,252,234,1) 12%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 98%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=0 ); /* IE6-9 */
}
/* .form-post{
  max-width: 800px;
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
}
.form-login{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
