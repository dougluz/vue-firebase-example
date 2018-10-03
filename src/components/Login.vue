<template lang="html">
  <div>
    <div class="">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <h3>Login</h3>
            </v-card-title>
              <v-form>
                <v-text-field
                  label="Email"
                  placeholder="Email"
                  v-model="email"
                  solo></v-text-field>
                  <v-text-field
                    label="Senha"
                    placeholder="Senha"
                    v-model="password"
                    solo></v-text-field>
              </v-form>
              <v-card-actions>
                <v-btn color="success" v-on:click="signIn">Conectar</v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
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
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #61B865;
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
