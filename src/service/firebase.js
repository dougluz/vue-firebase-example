import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDZJcDwd56XiLSYWi4UuN9CD6Cj2NqVSN8',
  authDomain: 'vue-authentication-813b3.firebaseapp.com',
  databaseURL: 'https://vue-authentication-813b3.firebaseio.com',
  projectId: 'vue-authentication-813b3',
  storageBucket: 'vue-authentication-813b3.appspot.com',
  messagingSenderId: '366877270193'
}

firebase.initializeApp(config)

export default {
  database: firebase.database(),
  firebase: firebase
}
