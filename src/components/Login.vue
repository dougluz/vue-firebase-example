<template lang="html">
  <div>
    <div class="">
      <v-layout>
        <v-container grid-list-xl>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-title primary-title>
                <h3>Login</h3>
              </v-card-title>
                <v-container grid-list-xl>
                  <v-form>
                    <v-text-field
                      label="Email"
                      placeholder="Email"
                      v-model="email"
                      solo></v-text-field>
                      <v-text-field
                        label="Senha"
                        :append-icon="password_show ? 'visibility_off' : 'visibility'"
                        :type="password_show ? 'text' : 'password'"
                        placeholder="Senha"
                        v-model="password"
                        @click:append="password_show = !password_show"
                        solo></v-text-field>
                  </v-form>
                  <v-card-actions>
                    <v-btn color="success" v-on:click="signIn">Conectar</v-btn>
                  </v-card-actions>
              </v-container>
            </v-card>
          </v-flex>
        </v-container>
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
      password_show: false,
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => 'The email and password you entered dont match'
      }
    }
  },
  methods: {
    signIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('hello')
          },
          err => {
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
  background-color: #61b865;
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
