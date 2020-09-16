<template>
  <v-app>
    <div class="d-flex flex-column fill-height" style="min-width:570px;">
      <Header />
      <v-main fill-height>
        <router-view></router-view>
      </v-main>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style>
div,
p,
span,
a {
  font-family: "Scotch(FONT_BY_LYAJKA)", cursive;
  line-height: 1.2;
}
/* header */
.main-menu {
  text-transform: none !important;
  height: 65px !important;
  width: 200px;
}
.main-menu span {
  font-size: 45px;
}
.menu-bg {
  transform: rotate(-6deg);

  height: 300px;
  width: 300px;
  margin-left: auto;
  padding-top: 55px;

  background-image: url(./assets/menu.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top, center;
}
.main-menu-active {
  background-image: url(./assets/active-menu.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top, center;
}
.theme--light.v-btn--active::before,
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn:focus::before {
  opacity: 0 !important;
}
.menu-arrow {
  height: 300px;
  width: 100px;
  margin-left: 15px;

  background-image: url(./assets/menu-arrow.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 35%, center;
}
.menu-arrow-text {
  padding-left: 65px;
  transform: rotate(10deg);
  font-size: 52px;
}
/* home */
.hello {
  display: inline-block;
  transform: rotate(-4deg);
  font-size: 50px;
}
.skills {
  display: inline-block;
  transform: rotate(2deg);
  font-size:50px;
}
.skills-new {
  margin:-0 0 -60px 0;
}
.contacts-bg {
  transform: rotate(5deg);
  margin-top: 80px; 
  display: inline-block;

  height: 300px;
  width: 300px;
  margin-left: auto;
  padding: 130px 30px 0 30px;
  font-size: 40px;

  background-image: url(./assets/contacts.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top, center;
}
.contacts-bg a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 40px;
}
.contacts-bg a:hover {
  text-decoration: underline;
  color: rgba(36, 131, 224, 0.9) !important;
}
.home-img{
  width:550px;
  display: inline-block;
  padding-left:40px;
}
/* footer */
.footer {
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 5px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-style: italic;
}
</style>