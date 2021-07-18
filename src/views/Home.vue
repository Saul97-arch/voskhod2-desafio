<template>
    <div class="home">
        <h3>Saúde e entretenimento tudo num mesmo lugar.</h3>
        <div class="buttons-area">
            <div>
                <HomeButton :src="entretenimento" titulo="Entretenimento" path="/entretenimento" />
                <HomeButton :src="nutricao" titulo="Nutrição" path="/nutricao" />
            </div>
            <div>
                <HomeButton :src="jogos" titulo="Jogos" path="/jogos" />
                <HomeButton :src="saudeFisica" titulo="Saúde Física" path="/saude-fisica" />
            </div>
            <div>
                <HomeButton :src="saudeMental" titulo="Saúde Mental" path="/saude-mental" />
                <HomeButton :src="sobre" titulo="Sobre" path="/sobre" />
            </div>
        </div>
        <Carousel />
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import HomeButton from "../components/HomeButton.vue";

import Nutricao from "../assets/imagens/button/nutricao.jpg";
import Entretenimento from "../assets/imagens/button/entretenimento.jpg";
import Jogos from "../assets/imagens/button/jogos.jpg";
import SaudeFisica from "../assets/imagens/button/saude-fisica.jpg";
import SaudeMental from "../assets/imagens/button/saude-mental.jpg";
import Sobre from "../assets/imagens/button/sobre.jpg";

export default {
    async mounted() {
        this.dadosProfissionais = await this.getData();
    },
    components: {
        Carousel,
        HomeButton,
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
            entretenimento: Entretenimento,
            jogos: Jogos,
            nutricao: Nutricao,
            saudeFisica: SaudeFisica,
            saudeMental: SaudeMental,
            sobre: Sobre,
        };
    },
};
</script>

<style scoped>
.buttons-area {
    display: flex;
    flex-direction: column;
    margin: 15px 0px 15px 0px;
    justify-content: center;
}
.buttons-area div {
    display: flex;
}
</style>
