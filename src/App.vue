<template>
  <v-app>
    <NavAppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavAppBar from "./components/NavAppBar.vue";
export default {
  name: "App",
  components: {
    NavAppBar,
    
  },
  async mounted() {
    this.dadosProfissionais = await this.getData();
    console.log(this.dadosProfissionais);
  },
  methods: {
    async getData() {
      const response = await fetch(
        "https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json"
      );

      const data = await response.json();

      return data;
    },
  },
  data() {
    return {
      dadosProfissionais: [],
    };
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: "GillSansUltraBold";
    src: local("GillSansUltraBold"), url(./assets/fonts/GillSansUltraBold/GillSansUltraBold.ttf) format("truetype");
}

#app {
    font-family: GillSansUltraBold, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
