<template lang="html">
  <div class="login">
    <h3>Login</h3>
    <input type="text" name="" value="" placeholder="Email" v-model="email"><br>
    <input type="password" name="password" value="" placeholder="Password" v-model="password"><br>
    <button type="button" name="button" v-on:click="signIn">Conectar</button>
    <p>Não tem uma conta? Você pode <router-link to="/sign-up">criar uma</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Ops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style lang="css">
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
