<template>
  <v-container style="max-width:1500px;" pt-0 grid-list-xl>
    <v-row justify="center">
      <template v-for="(item,i) in items">
        <v-col :key="i" cols="12" sm="10" md="6" lg="5" xl="4" class="pt-2">
          <v-row>
            <div class="site-wrap" :style="'transform:rotate(' + rotations[i % 5] + 'deg);'">
              <div class="site-outer">
                <div
                  class="site-inner"
                  :style="'background-image:url(' + require('../assets/sites/' + item.pic) + ');'"
                />
              </div>
              <img :src="require('../assets/frame.png')" class="image-frame" />
              <div class="site-link">
                <div>
                  <a :href="item.href" target="blank">
                    <v-icon>mdi-open-in-new</v-icon>
                    {{item.name}}
                  </a>
                </div>
              </div>
            </div>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      rotations: [1.5, -0.5, -1.5, 0.5, -1, 1],
      items: [
        {
          href: `https://wilkelab.org/`,
          name: `The Wilke Lab at UT Austin`,
          pic: "wilkelab.png"
        },
        {
          href: `http://structuralbiology.cns.utexas.edu`,
          name: `Sauer Lab at UT Austin`,
          pic: "sauer_lab.png"
        },
        {
          href: `http://ctxci.com`,
          name: `CTX - distributor of composite reinforcement materials`,
          pic: "ctx.png"
        },
        {
          href: `http://www.la-math.ru`,
          name: `La-Math (a personal website)`,
          pic: "la-math.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.site-wrap {
  position: relative;
  margin: 0 auto 0 auto;
}
.site-outer {
  width: 450px;
  height: 472px;
  position: relative;
}
.site-inner {
  width: 372px;
  height: 311px;
  position: absolute;
  top: 39px;
  left: 40px;

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
.site-link {
  position: absolute;
  left: 40px;
  top: 356px;
  width: 370px;
  height: 96px;
}
.site-link div {
  display: flex;
  height: 100%;
}
.site-link a {
  font-size: 30px;
  padding: 0;
  color: black;
  margin: auto;
  text-align: center;
  text-decoration: none;
}
.site-link a:hover {
  text-decoration: underline;
}
.site-link i {
  color: black;
  font-size: 35px;
  padding: 0 5px 1px 0;
}
</style>
