<template>
    <router-link :to="path">
        <button>
            <img :src="src" :alt="titulo" />
            <h5>{{ titulo }}</h5>
        </button>
    </router-link>
</template>

<script>
export default {
    name: "HomeButton",
    props: {
        src: String,
        titulo: String,
        path: String,
    },
};
</script>

<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}
h5 {
    position: absolute;
    color: #000;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 7px;
}
img {
    width: 150px;
    border-radius: 7px;
}
</style>
