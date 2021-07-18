<template>
    <div>
        <h1>Jogos</h1>
        <div v-for="jogo of infoJogos" :key="jogo.id">
            <CardGame
                :nome="jogo.nome"
                :avaliacao="jogo.avaliacao"
                :imagem="jogo.imagem"
                :descricao="jogo.descricao"
                :plataformas="jogo.plataformas"
                v-if="infoJogos"
                :site="jogo.site"
            />
        </div>
    </div>
</template>

<script>
import CardGame from "../components/CardGame.vue";
export default {
    data() {
        return {
            infoJogos: [],
        };
    },
    mounted() {
        fetch("https://it3-gdf-default-rtdb.firebaseio.com/online/jogos.json")
            .then((response) => response.json())
            .then((json) => {
                this.infoJogos = json;
            });
    },
    methods: {},
    components: {
        CardGame,
    },
};
</script>

<style scoped>
h1 {
    background-color: rgb(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 7px;
}
</style>
