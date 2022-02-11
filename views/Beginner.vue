<template>
  <section class="section-beginner">
    <div class="container">
      <div class="post">
        <div class="form-post">
          <form action="#" id="msform">
             <h2 class="fs-title">Тестування для початківців віком від 5 до 8 років</h2>
             <ol>
               <li>
                 <div class="form-question">
                   <div class="text">
                     1 Порахуй скільки хрестиків та нуліків зображено на малюнку.
                   </div>
                   <img src="img/icons/images/crosses.png">
                   <div class="radio">
                      <my-radio
                      :options='checkedOptions0'
                      v-model="answer0"/>
                      <my-radio
                      :options='checkedOptions1'
                      v-model="answer1"/>
                    </div>
                  </div>
               </li>
               <li>
                  <div class="text">
                    2 У трьох квадратах намальовані кружечки. У двох квадратах вони розташовуються абсолютно однаково,
                    а в квадраті, що залишився, один гурток поміщений не так, як у решті двох. Знайди цей квадрат.
                    Це і буде твоя відповідь на завдання. Якщо вирішив завдання з кружечками,
                    то так само вирішуй завдання з галочками та хрестиками.
                  </div>
                  <img src="img/icons/images/squares.jpg">
                  <div class="radio">
                    <my-radio :options='checkedOptions2'
                      v-model="answer2" />
                    <my-radio :options='checkedOptions3'
                      v-model="answer3" />
                    <my-radio :options='checkedOptions4'
                      v-model="answer4" />
                  </div>
               </li>
               <li>
                  <div class="text">
                     3 У трьох квадратах намальовані шахові фігури – чорні коні.
                     В двох квадратах вони розташовуються абсолютно однаково, а в квадраті, що залишився,
                     один кінь поміщений не так, як у решті двох. Потрібно знайти цей квадрат.
                     Це і є відповіддю на запропоноване завдання. Також само вирішуй завдання
                     з білими конями та слонами.
                  </div>
                  <img src="img/icons/images/figures.jpg">
                  <div class="radio">
                    <my-radio :options='checkedOptions5'
                     v-model="answer5"/>
                    <my-radio :options='checkedOptions6'
                     v-model="answer6"/>
                    <my-radio :options='checkedOptions7'
                     v-model="answer7"/>
                  </div>
               </li>
               <li>
                  <div class="text">
                    4 Hеобхідно простежити лінію зліва направо, щоб визначити, де вона закінчається.
                    Починати треба з лінії А. Ви маєте записати той номер, яким ця лінія закінчується.
                    Виконуючи завдання, потрібно простежити лінію поглядом.
                  </div>
                   <img src="img/icons/images/lines.jpg">
                  <div class="radio">
                    <my-radio :options='checkedOptions8'
                     v-model="answer8" />
                    <my-radio :options='checkedOptions9'
                     v-model="answer9" />
                    <my-radio :options='checkedOptions10'
                     v-model="answer10" />
                    <my-radio :options='checkedOptions11'
                     v-model="answer11" />
                    <my-radio :options='checkedOptions12'
                     v-model="answer12" />
                  </div>
               </li>
             </ol>
             <div class="form-group">
               <my-button @click="Press">Відправити</my-button>
             </div>
           </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from '../components/ui/MyButton.vue'
import MyRadio from '../components/ui/MyRadio.vue'

export default {
  components: { MyRadio, MyButton },
  name: 'beginner',
  data () {
    return {
      answer0: '',
      checkedOptions0: [
        '17 кіл',
        '19 кіл',
        '18 кіл'
      ],
      answer1: '',
      checkedOptions1: [
        '18 хрестиків',
        '19 хрестиків',
        '17 хрестиків'
      ],
      answer2: '',
      checkedOptions2: [
        'кружечки - 1 квадрат',
        'кружечки - 2 квадрат',
        'кружечки - 3 квадрат'
      ],
      answer3: '',
      checkedOptions3: [
        'галочки - 1 квадрат',
        'галочки - 2 квадрат',
        'галочки - 3 квадрат'
      ],
      answer4: '',
      checkedOptions4: [
        'хрестики - 1 квадрат',
        'хрестики - 2 квадрат',
        'хрестики - 3 квадрат'
      ],
      answer5: '',
      checkedOptions5: [
        'чорні кони - 1 квадрат',
        'чорні кони - 2 квадрат',
        'чорні кони - 3 квадрат '
      ],
      answer6: '',
      checkedOptions6: [
        'білі кони - 1 квадрат',
        'білі кони - 2 квадрат',
        'білі кони - 3 квадрат'
      ],
      answer7: '',
      checkedOptions7: [
        'слони - 1 квадрат',
        'слони - 2 квадрат',
        'слони - 3 квадрат'
      ],
      answer8: '',
      checkedOptions8: [
        'лінія  A закінчується на  1',
        'лінія  A закінчується на  2',
        'лінія  A закінчується на  3',
        'лінія  A закінчується на  4',
        'лінія  A закінчується на  5'
      ],
      answer9: '',
      checkedOptions9: [
        'лінія  Б закінчується на  1',
        'лінія  Б закінчується на  2',
        'лінія  Б закінчується на  3',
        'лінія  Б закінчується на  4',
        'лінія  Б закінчується на  5'
      ],
      answer10: '',
      checkedOptions10: [
        'лінія  В закінчується на  1',
        'лінія  В закінчується на  2',
        'лінія  В закінчується на  3',
        'лінія  В закінчується на  4',
        'лінія  В закінчується на  5'
      ],
      answer11: '',
      checkedOptions11: [
        'лінія  Г закінчується на  1',
        'лінія  Г закінчується на  2',
        'лінія  Г закінчується на  3',
        'лінія  Г закінчується на  4'
      ],
      answer12: '',
      correctAnswerIndex12: 1,
      checkedOptions12: [
        'лінія  Д закінчується на  1',
        'лінія  Д закінчується на  2',
        'лінія  Д закінчується на  3',
        'лінія  Д закінчується на  4',
        'лінія  Д закінчується на  5'
      ]
    }
  },
  methods: {
    onRadioSelected (selectValue) {
      this.answer = selectValue
    },
    Press (event) {
      event.preventDefault()
      const grade = this.calcGrade()
      alert(grade)
    },
    calcGrade () {
      let result = 0
      for (let i = 0; i <= 12; i++) {
        console.log(this[`answer${i}`], this[`checkedOptions${i}`])
        const correctIndex = this[`correctAnswerIndex${i}`]
        if (this[`answer${i}`] === this[`checkedOptions${i}`][correctIndex]) {
          result++
        }
      }
      // if (this.answer === this.checkedOptions[1]) {
      //   result++;
      // }
      // if (this.answer1 === this.checkedOptions1[2]) {
      //   result++;
      // }
      return result
    }
  }
}
</script>

<style scoped>
.section-beginner{
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  min-height: 300px;
  background: #fff;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 0 10px #000;
  position: relative;
} */
.form-login{
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  max-height: 400px;
  max-width: 600px;

}
</style>
