<template>
  <section class="section-auth">
    <div class="container">
      <div class="create-wrapper">

          <h1 class="fs-title">Вхід</h1>
          <div id="v-model-basic" class="form-group">
            <my-input label='Введіть ваш логін' type="text" v-model:modelValue='login'  />
          </div>
          <div class="form-group">
            <my-input class="input" type="password" label='Введіть ваш пароль' v-model:modelValue='password' />
          </div>
          <div class="link-registr">
            <a href="#">Забули пароль?</a>
          </div>
          <div class="form-group">
            <my-formbutton
            @click="doAuth">
            Увійти</my-formbutton>
          </div>

      </div>
    </div>
  </section>
</template>

<script>
import MyInput from '@/components/ui/MyInput.vue'
import MyFormbutton from '@/components/ui/MyFormbutton.vue'
import { isAuth } from '@/App.vue'

export default {
  components: {
    MyInput,
    MyFormbutton

  },
  data () {
    return {
      login: '',
      password: '',
      isAuth
    }
  },
  methods: {
    doAuth () {
      this.$store.dispatch('user/doAuth',
        {
          login: this.login,
          password: this.password
        }).then((status) => {
        if (status === 'Ok') {
          this.$router.push('/')
        } else if (status !== 'Ок') {
          alert('Помилка авторизації')
          console.warn(status)
        }
      })
    }
  }
}
//    doAuth () {
//      this.isAuth = true
//    }
//  this.$store.dispatch('user/doAuth',
//    {
//      login: this.login,
//      password: this.password
//    }).then((status) => {
//    if (status === 'Ok') {
//      this.$router.push('/')
//    } else if (status !== 'Ок') {
//      alert('Помилка авторизації')
//      console.warn(status)
//    }
//    })
//   },
// doRegister () {
// this.showLogin = false
//  this.swowRegistration = true
//  }
// }
// }
</script>

<style scoped>
.section-auth{
  width: 100%;
  padding: 150px 0 100px;
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fefcea+12,f1da36+82,f1da36+82,f1da36+98 */
  background: rgb(254,252,234); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(254,252,234,1) 12%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 82%, rgba(241,218,54,1) 98%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(254,252,234,1) 12%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 82%,rgba(241,218,54,1) 98%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=0 ); /* IE6-9 */
}
h1{
  align-items: center;
  font-size: 45px;
}
 .create-wrapper{
   max-width: 600px;
   margin: 0 auto;
 }
/* .dialog{
  align-items: center;
  max-width: 500px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
}
.form-group{
  display: flex;
  flex-direction: column;
  margin: 3px;
} */
.input{
  width: 100%;
}
.link-registr{
  display: flex;
}

</style>
