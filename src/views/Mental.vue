<template>
    <div>
        <h1>Saúde Mental</h1>

        <div v-if="dadosProfissionais">
            <CardView
                v-if="dadosProfissionais[1]"
                :imagem="dadosProfissionais[1].imagem"
                :nome="dadosProfissionais[1].nome"
                :servicos="dadosProfissionais[1].servicos"
                :local="dadosProfissionais[1].local"

            />
            <CardView
                v-if="dadosProfissionais[4]"
                :imagem="dadosProfissionais[4].imagem"
                :nome="dadosProfissionais[4].nome"
                :servicos="dadosProfissionais[4].servicos"
                :local="dadosProfissionais[4].local"

            />

            <CardView
                v-if="dadosProfissionais[7]"
                :imagem="dadosProfissionais[7].imagem"
                :nome="dadosProfissionais[7].nome"
                :servicos="dadosProfissionais[7].servicos"
                :local="dadosProfissionais[7].local"

            />
        </div>
    </div>
</template>

<script>
import CardView from "../components/CardView.vue";

export default {
    name: "Mental",
    async mounted() {
        this.dadosProfissionais = await this.getData();
    },
    components: {
        CardView,
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

<style scoped>
h1 {
    background-color: rgb(255, 255, 255, 0.5);
    padding: 5px;
    border-radius: 7px;
}
</style>
