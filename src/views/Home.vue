<template>
    <div class="home">
        <p>
            Momentos como este podem causar diversos impactos negativos na qualidade de vida das pessoas. Dentre eles,
            podemos citar o cansaço no dia-a-dia que acarreta em queda de produtividade no trabalho, e pode prejudicar a
            saúde física e mental.
        </p>
        <p>
            Nós da Voskhod-Bem estamos aqui para poder proporcionar para você, com a ajuda de nossos melhores
            profissionais, consultas individuais para o seu melhor desempenho fisíco e mental. Conheça já e 'e-leve' sua
            saúde! :&#41;
        </p>
        <Carrossel />
    </div>
</template>

<script>
import Carrossel from "../components/Carossel.vue";
export default {
    async mounted() {
        this.dadosProfissionais = await this.getData();
        console.log(this.dadosProfissionais);
    },
    components: {
        Carrossel,
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
