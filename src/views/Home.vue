<template>
  <v-container style="max-width:1000px;" pt-0 px-8>
    <v-row>
      <v-col class="text-left pb-6 pt-0" cols="12" sm="12">
        <div class="text-center hello">
          Hi! I'm Ivan
          <br />Welcome to my site!
        </div>
      </v-col>
      <v-col cols="12" sm="11" md="7" order-md="3" class="text-right pt-0">
        <div class="skills-new">
          <img :src="require('../assets/home.png')" class="home-img">
        </div>
        
      </v-col>
      <v-col cols="12" sm="11" md="5" class="pl-12 text-left">
        <div class="contacts-bg">
          e-mail -
          <br />
          <a :href="'mailto:' + e1 + '@' + e2">{{e1+'@'+e2}}</a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      e1: "itsvanka",
      e2: "gmail.com"
    };
  }
};
</script>

<style scoped>
</style>
