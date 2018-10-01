<template lang="html">
  <div class="sign-up">
    <p>Criar uma nova Conta</p>
    <input type="text" name="Email" v-model="email" placeholder="Email"><br>
    <input type="password" name="" v-model="password" placeholder="Password"><br>
    <button type="button" name="button" v-on:click="signUp">Cadastrar</button>
    <span>Voltar para o <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          alert('Oops, ' + err.message)
        }
      )
    }
  }
}
</script>

<style lang="css">
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
