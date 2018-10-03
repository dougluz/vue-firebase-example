// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify)

let app
var config = {
  apiKey: 'AIzaSyDZJcDwd56XiLSYWi4UuN9CD6Cj2NqVSN8',
  authDomain: 'vue-authentication-813b3.firebaseapp.com',
  databaseURL: 'https://vue-authentication-813b3.firebaseio.com',
  projectId: 'vue-authentication-813b3',
  storageBucket: 'vue-authentication-813b3.appspot.com',
  messagingSenderId: '366877270193'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})

/* eslint-disable no-new */
