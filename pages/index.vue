<template>
  <v-app>
    <v-app-bar app color="primary" elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span class="font-weight-bold warning--text">Free</span>
        <span class="white--text">QR Generator</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="textQR"
              filled
              label="QR Text"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="size"
              label="Size"
              suffix="px"
              filled
              :rules="sizeRules"
            ></v-text-field>
          </v-col>
        </v-row>
        <center>
          <v-img
            :src="urlQR"
            :height="size"
            :width="size"
            :sizes="size + 'px'"
          ></v-img>
        </center>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    textQR: "You can fill any QR text",
    size: 200,
    sizeRules: [
      (v) => (v <= 500 && v >= 0) || "Must in range between 0 - 500 px",
    ],
  }),
  computed: {
    urlQR() {
      return `http://${process.env.APP_HOST || "localhost"}:${
        process.env.APP_PORT || 3000
      }/render?data=${this.textQR}&size=${this.size}`;
    },
  },
  props: {
    source: String,
  },
};
</script>
