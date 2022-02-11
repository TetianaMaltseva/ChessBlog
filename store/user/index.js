import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'

function isValidToken (token) {
  return token !== undefined
// undefined
}
export default {
  state: {
    token: '',
    name: '',
    user: {}
  },
  mutations: {
    setAuthUser (state, data) {
      state.user = data || {} // взять пустой объект или нулл
      // что-бы после перезагрузки страницы не выбрасывало в регистрацию
    }
  },
  getters: {
    isAuth (state) {
      return isValidToken(state.user.accessToken)
      // return isValidToken(state.user.accessToken)
      // return isValidToken(state.user.token)
    },
    userEmail (state) {
      return state.user.email
    }
  },
  actions: {
    doAuth (context, data) {
      const auth = getAuth()
      return signInWithEmailAndPassword(auth, data.login, data.password)
        .then((userCredential) => {
          //  const user = userCredential.user
          context.state.user = userCredential.user
          // console.log('Auth user', context.state.user)
          return 'Ok'
        })
        .catch((error) => {
          const errorMessage = error.message
          return errorMessage
        })
    },
    logout (context) {
      context.state.user = {}
      const auth = getAuth()
      return signOut(auth).then(() => 'Ok')
    },
    doCreate (context, data) {
      const auth = getAuth()
      return createUserWithEmailAndPassword(auth, data.login, data.password)
        .then((userCredential) => {
          context.state.user = userCredential.user
          return 'Ok'
        })
        .catch((error) => {
          const errorMessage = error.message
          return errorMessage
          // ${errorMassage}'
          // const errorCode = error.code
        })
    }
  },
  namespaced: true
}
