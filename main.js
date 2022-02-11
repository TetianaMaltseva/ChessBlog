import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import myStore from './myStore'
import MyRadio from '@/components/ui/MyRadio'
import MyButton from '@/components/ui/MyButton'
import MyFormbutton from '@/components/ui/MyFormbutton'
import MyInput from '@/components/ui/MyInput'
import MyCheckbox from '@/components/ui/MyCheckbox'
import MyTextarea from '@/components/ui/MyTextarea'
import MyDialog from '@/components/ui/MyDialog'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Import the function you need from the 50Ks you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDos51mwcKTpny1w9AM5xqIP3QUrAhp_xo',
  authDomain: 'chessblog-dfd5d.firebaseapp.com',
  databaseURL: 'https://chessblog-dfd5d-default-rtdb.firebaseio.com/',
  projectId: 'chessblog-dfd5d',
  storageBucket: 'chessblog-dfd5d.appspot.com',
  messagingSenderId: '921285352921',
  appId: '1:921285352921:web:ed197b8bc1a7313ac54dc8'
}
// Initialize Firebase
initializeApp(firebaseConfig)

createApp(App)
  .use(store)
  .use(router)
  .component('MyRadio', MyRadio)
  .component('MyButton', MyButton)
  .component('MyFormbutton', MyFormbutton)
  .component('MyInput', MyInput)
  .component('MyCheckbox', MyCheckbox)
  .component('MyTextarea', MyTextarea)
  .component('MyDialog', MyDialog)
  .mount('#app')

const db = getDatabase()
const auth = getAuth()
// let mounted = false
const path = '/posts'
onValue(ref(db, path), (snapshot) => {
  store.commit('posts/clear')
  const postsObject = snapshot.val()
  for (const value of Object.values(postsObject)) {
    store.commit('posts/addPost', value)
  }
})

// function getData (path, stringClear, stringAdd) {
//  onValue(ref(db, path), (snapshot) => {
// console.log('onVValue for', path, snapshot.val())
//    store.commit(stringClear)
//    const Object = snapshot.val()
//    console.log('getData', Object)
//    for (const [value] of Object.entries(Object)) {
//      store.commit(stringAdd, value)
//    }
//  })
// }

// getData('/posts', 'posts/clear', 'posts/addPost')

onAuthStateChanged(auth, (user) => {
  store.commit('user/setAuthUser', user) // вызвали мутацию setAuthUser
  console.log('onAuthStateChanged', user)
  // if (!mounted) {
  //  mounted = true
  // }
})

// const USE_BACK = 'my' // 'fb'
// if (USE_BACK === 'my') {
//  App.use(myStore)
// } else {
//  App.use(store)
// }
