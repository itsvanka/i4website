<template>
  <v-container fluid pl-12 pt-5>
    <v-row no-gutters class="text-center">
      <v-col class="pr-6 pb-2" col="7" sm="8" md="7">
        <div class="menu-bg">
          <div class="py-1">
            <v-btn active-class="main-menu-active" text exact to="/" class="main-menu">Home</v-btn>
          </div>
          <div class="py-1">
            <v-btn text active-class="main-menu-active" exact to="/about" class="main-menu">About</v-btn>
          </div>
          <div class="py-1">
            <v-btn
              text
              active-class="main-menu-active"
              exact
              to="/projects"
              class="main-menu"
            >Projects</v-btn>
          </div>
        </div>
      </v-col>
      <v-col col="5" sm="4" md="5">
        <div class="menu-arrow">
          <div class="menu-arrow-text">menu</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
