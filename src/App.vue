<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Inicio</v-btn>
        <v-btn flat to="/post">Posts</v-btn>
        <v-btn flat v-on:click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
