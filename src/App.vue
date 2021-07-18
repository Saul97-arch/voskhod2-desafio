<template>
    <v-app>
        <NavAppBar />
        <v-main>
            <div class="container">
                <router-view />
            </div>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import NavAppBar from "./components/NavAppBar.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        NavAppBar,
        Footer,
    },
    async mounted() {
        this.dadosProfissionais = await this.getData();
        console.log(this.dadosProfissionais);
    },
    methods: {
        async getData() {
            const response = await fetch("https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json");

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

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#app {
    font-family: GillSansUltraBold, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-image: url("./assets/imagens/logo.png");
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

#app p {
    font-family: Poppins;
    text-align: justify;
    background-color: rgb(255, 255, 255, 0.5);
    display: block;
    padding: 10px;
    border-radius: 7px;
}

.container {
    padding: 20px;
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
