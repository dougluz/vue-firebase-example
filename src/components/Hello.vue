<template>
  <div class="hello">
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="card" @click="displayDetails(picture.id)" v-for="picture in pictures" v-bind:key="picture.id">
            <v-img
             @click="displayDetails(picture.id)"
              class="white--text hover"
              height="400px"
              :src = picture.url
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <h3>{{ picture.comment }}</h3>
                <span>{{ picture.info }}</span>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-actions class="pa-3">
                <v-spacer></v-spacer>
                <v-btn small round class="like" @click="alert(picture.id)">
                  <v-icon>thumb_up_alt</v-icon>
                </v-btn>
                <v-btn small round class="hover" @click="alert(picture.id)">
                  <v-icon>reply</v-icon>
                </v-btn>
              </v-card-actions>
          </v-card>
          <br>
        </v-flex>
        <router-view></router-view>
        <v-fab-transition>
          <v-btn
            v-model="fab"
            fab
            fixed
            bottom
            right
            to="hello/novo"
          >
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import data from '../data'
import firebase from 'firebase'

export default {
  name: 'hello',
  data () {
    return {
      pictures: data.pictures,
      fab: false,
      hidden: false
    }
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login')
        })
    },
    displayDetails (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
    alert (id) {
      alert('Teste ' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list {
  width: 100%;
  padding: 0;
}
.hello {
  margin-top: 50px;
}
.card {
  margin-bottom: 5%;
  border-radius: 15px;
}
.hover {
  cursor: pointer;
}
</style>
