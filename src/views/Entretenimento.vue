<template>
    <div>
        <ViewTitulo :src="imagem" titulo="Entretenimento" />

        <div v-if="dadosProfissionais">
            <CardView
                :imagem="dadosProfissionais[0].imagem"
                :nome="dadosProfissionais[0].nome"
                :servicos="dadosProfissionais[0].servicos"
            />

            <CardView
                :imagem="dadosProfissionais[5].imagem"
                :nome="dadosProfissionais[5].nome"
                :servicos="dadosProfissionais[5].servicos"
            />

            <CardView
                :imagem="dadosProfissionais[6].imagem"
                :nome="dadosProfissionais[6].nome"
                :servicos="dadosProfissionais[6].servicos"
            />

            <CardView
                :imagem="dadosProfissionais[8].imagem"
                :nome="dadosProfissionais[8].nome"
                :servicos="dadosProfissionais[8].servicos"
            />
        </div>
    </div>
</template>

<script>
import ViewTitulo from "../components/ViewTitulo.vue";
import Entretenimento from "../assets/imagens/entretenimento.jpg";
import CardView from "../components/CardView.vue";

export default {
    async mounted() {
        this.dadosProfissionais = await this.getData();
        console.log(this.dadosProfissionais);
    },
    components: {
        CardView,
        ViewTitulo,
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
            imagem: Entretenimento,
            dadosProfissionais: [],
        };
    },
};
</script>
