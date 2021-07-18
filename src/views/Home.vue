<template>
    <div class="home">
        <h3>Saúde e entretenimento tudo num mesmo lugar.</h3>
        <div class="buttons-area">
            <div>
                <HomeButton :src="entretenimento" titulo="Entretenimento" path="/entretenimento" />
                <HomeButton :src="nutricao" titulo="Nutrição" path="/nutricao" />
            </div>
            <div>
                <HomeButton :src="saudeFisica" titulo="Saúde Física" path="/saude-fisica" />
                <HomeButton :src="saudeMental" titulo="Saúde Mental" path="/saude-mental" />
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
import SaudeFisica from "../assets/imagens/button/saude-fisica.jpg";
import SaudeMental from "../assets/imagens/button/saude-mental.jpg";

export default {
    async mounted() {
        this.dadosProfissionais = await this.getData();
        console.log(this.dadosProfissionais);
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
            nutricao: Nutricao,
            saudeFisica: SaudeFisica,
            saudeMental: SaudeMental,
        };
    },
};
</script>

<style scoped>
.buttons-area {
    display: flex;
    margin: 15px;
}
</style>
