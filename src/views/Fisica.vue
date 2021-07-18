<template>
    <div>
        <h1>Saúde Física</h1>

        <div v-if="dadosProfissionais">
            <CardView
                :imagem="dadosProfissionais[0].imagem"
                :nome="dadosProfissionais[0].nome"
                :servicos="dadosProfissionais[0].servicos"
                :local="dadosProfissionais[0].local"
            />
            <CardView
                :imagem="dadosProfissionais[2].imagem"
                :nome="dadosProfissionais[2].nome"
                :servicos="dadosProfissionais[2].servicos"
                :local="dadosProfissionais[2].local"
            />

            <CardView
                :imagem="dadosProfissionais[1].imagem"
                :nome="dadosProfissionais[1].nome"
                :servicos="dadosProfissionais[1].servicos"
                :local="dadosProfissionais[1].local"
            />

            <CardView
                :imagem="dadosProfissionais[5].imagem"
                :nome="dadosProfissionais[5].nome"
                :servicos="dadosProfissionais[5].servicos"
                :local="dadosProfissionais[5].local"
            />

            <CardView
                :imagem="dadosProfissionais[6].imagem"
                :nome="dadosProfissionais[6].nome"
                :servicos="dadosProfissionais[6].servicos"
                :local="dadosProfissionais[6].local"
            />

            <CardView
                :imagem="dadosProfissionais[7].imagem"
                :nome="dadosProfissionais[7].nome"
                :servicos="dadosProfissionais[7].servicos"
                :local="dadosProfissionais[7].local"
            />

            <CardView
                :imagem="dadosProfissionais[8].imagem"
                :nome="dadosProfissionais[8].nome"
                :servicos="dadosProfissionais[8].servicos"
                :local="dadosProfissionais[8].local"

            />

            <CardView
                :imagem="dadosProfissionais[9].imagem"
                :nome="dadosProfissionais[9].nome"
                :servicos="dadosProfissionais[9].servicos"
                :local="dadosProfissionais[9].local"

            />
        </div>
    </div>
</template>

<script>
import CardView from "../components/CardView.vue";

export default {
    async mounted() {
        this.dadosProfissionais = await this.getData();
        console.log(this.dadosProfissionais);
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
