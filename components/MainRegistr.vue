<template>
<section class="section-registr">
  <div class="container">
    <div class="create-wrapper">
      <div>
       <h1 class="form_title">Створіть свій обліковий запис</h1>
        <div class="form_item">
          <my-input label='Email*:' v-model='login'/>
        </div>
        <div class="form_item">
          <my-input type="password" label='Пароль:*' v-model='password'/>
        </div>
        <div class="form_item">
          <my-input type="password" label='Повторіть пароль:*' v-model='password'/>
        </div>
          <div class="checkbox">
            <my-checkbox :options='checkboxOptions' v-model="answers"/>
          </div>
        <div class="form-group">
          <my-formbutton @click="doRegister">Відправити</my-formbutton>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import MyInput from '@/components/ui/MyInput.vue'
// import MyRadio from '@/components/ui/MyRadio.vue'
import MyFormbutton from '../components/ui/MyFormbutton.vue'
import MyCheckbox from '../components/ui/MyCheckbox.vue'

export default {
  components: {
    MyInput,
    // MyRadio,
    MyFormbutton,
    MyCheckbox
  },
  data () {
    return {
      login: '',
      password: '',
      // surname: '',
      // name: '',
      // patronymic: '',
      // email: '',
      // rank: '',
      // answer: '',
      // radioOptions: [
      //  'Чоловіча',
      //  'Жіноча'
      // ],
      answers: true,
      checkboxOptions: [
        'Я даю згоду на обробку моїх персональних даних'
      ]
    }
  },
  methods: {
    onRadioSelected (selectValue) {
      this.answer = selectValue
    },
    doRegister () {
      this.$store.dispatch('user/doCreate',
        {
          login: this.login,
          password: this.password
        }).then((status) => {
        if (status === 'Ok') {
          this.$router.push('/')
        } else if (status !== 'Ок') {
          alert('Помилка реєстрації')
          console.warn(status)
        }
      })
    }
  }
}
</script>

<style scoped>
.section-registr{
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
 .create-wrapper{
   max-width: 800px;
   margin: 0 auto;
 }
/*.form-dialog{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
}*/
h1{
  font-size: 45px;
}
.form_title{
  margin-top: 20px;

}
.form-label{
  margin-top: 15px;
  font-size: 18px;
}
select{
  margin-top: 15px;
  font-size: 18px;
  min-width: 400px;
  min-height: 40px;
  border-radius: 7px;

}
.form-login{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
