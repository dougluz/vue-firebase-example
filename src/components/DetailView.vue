<template>
 <v-container class="content">
   <v-card>
      <v-container>
      <v-img
          @click="displayDetails(picture.id)"
          class="white--text hover"
          :src = this.pictures[$route.params.id].url
      >
      </v-img>
      <br>
      <v-divider></v-divider>
      <v-btn to="/post">Responder</v-btn>
      </v-container>
   </v-card>
  </v-container>
</template>

<script>
import data from '../data'
export default {
  name: 'DetailView',
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 40px;
}
</style>
