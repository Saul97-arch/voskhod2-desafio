<template>
    <v-app>
        <NavAppBar />
    </v-app>
</template>

<script>
import NavAppBar from "./components/NavAppBar.vue";

export default {
    name: "App",
    components: {
        NavAppBar,
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
