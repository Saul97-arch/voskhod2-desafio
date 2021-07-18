<template>
    <div class="view-titulo">
        <img :src="src" :alt="titulo" />
        <h1>{{ titulo }}</h1>
    </div>
</template>

<script>
export default {
    name: "ViewTitulo",
    props: {
        src: String,
        titulo: String,
    },
};
</script>

<style scoped>
.view-titulo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}
h1 {
    position: absolute;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 7px;
}
</style>
