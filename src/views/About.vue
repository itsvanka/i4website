<template>
  <v-container style="max-width:1500px;" pt-0>
    <v-row justify="center">
      <v-col cols="12" sm="11" md="6" lg="5" xl="5" class="pt-4">
        <div class="text-about pt-7">
          <p>
            My name is Ivan Chernyshov. I am a full stack web developer based in Austin, TX.
            Experienced in building interactive components and responsive layouts. Creative abilities include graphic design.
          </p>
        </div>
        <br>
        <div class="text-skills">
          <h1>Technical skills:</h1>
          <p>
            <u>Front-End:</u> JavaScript (Vue.js+VueX, React+Redux, jQuery), HTML5, CSS3 (Vuetify, Bootstrap)
          </p>
          <p>
            <u>Back-End:</u> PHP, Node.js, GraphQL, Python
          </p>
          <p>
            <u>Databases:</u> MySQL, MongoDB, Firebase
          </p>
          <p>
            <u>Version control:</u> Git, SVN
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="10" md="5" lg="4" xl="3" pt-4>
        <div class="myphoto-wrap">
          <div class="myphoto-outer">
            <div class="myphoto-inner" />
          </div>
          <img :src="require('../assets/frame.png')" class="image-frame" />
          <div class="myphoto-link">
            <div>
              <p>Ivan Chernyshov</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      false1: true,
      q: "qwerty",
      w: "mail.com",
      rotations: [1.5, -0.5, -1.5, 0.5, -1, 1],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style scoped>
.myphoto-wrap {
  position: relative;
  margin: 0 auto;
}
.myphoto-outer {
  width: 450px;
  height: 472px;
  position: relative;
}
.myphoto-inner {
  width: 372px;
  height: 311px;
  position: absolute;
  top: 39px;
  left: 40px;
  background-image: url(../assets/ivan_official.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border: 2px solid #aaaaaa;
}
.image-frame {
  position: absolute;
  top: 0;
  left: 0;
}
.myphoto-link {
  position: absolute;
  left: 40px;
  top: 356px;
  width: 370px;
  height: 96px;
}
.myphoto-link div {
  display: flex;
  height: 100%;
}
.myphoto-link p {
  font-size: 50px;
  padding: 0;
  color: black;
  margin: auto;
  text-align: center;
  text-decoration: none;
}
.text-about p {
  font-size: 22px;
  text-align: justify;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-style: italic;
  text-indent:40px;
}
.text-about h1 {
  font-size: 40px;
  text-decoration: underline;
  /*font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-style: italic;*/
  padding-bottom:10px;
}
.text-skills p {
  font-size: 20px;
  text-align: justify;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-style: italic;
  padding-left:40px;
  text-indent:-40px;
  margin: 0 0 5px 0;
}
.text-skills h1 {
  font-size: 23px;
  text-decoration: underline;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
padding-bottom: 5px;
}

</style>
