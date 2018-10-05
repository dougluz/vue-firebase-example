<template>
  <div id="app">
    <v-toolbar fixed>
      <!--<v-toolbar-side-icon>
      </v-toolbar-side-icon> -->
      <v-toolbar-title>Tranorte</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/hello"><v-icon>home</v-icon> Inicio</v-btn>
        <v-btn flat v-on:click="logout"><v-icon>exit_to_app</v-icon> Sair</v-btn>
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
  watch: {
    user: function () {
      firebase.onAuthStateChanged(function (user) {
        if (user) {
          return firebase.auth.currentUser
        } else {
          return false
        }
      })
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
