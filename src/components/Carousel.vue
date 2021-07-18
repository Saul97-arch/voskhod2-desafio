<template>
    <v-carousel v-model="model">
        <v-carousel-item v-for="(image, index) in images" :src="image" :key="index">
            <v-row class="fill-height" align="center" justify="center">
                <p class="text-carrousell">
                    {{ carosselText[index] }}
                </p>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
import Austronauta from "../assets/imagens/carroussel/real-austronaut.jpg";
import Yoga from "../assets/imagens/carroussel/saude-mental.jpg";
import Musculacao from "../assets/imagens/carroussel/saude-fisica.jpg";
import Danca from "../assets/imagens/carroussel/entretenimento.jpg";
import Nutricao from "../assets/imagens/carroussel/nutricao.jpg";

export default {
    name: "Carousel",
    data: () => ({
        model: 0,
        images: [Austronauta, Yoga, Musculacao, Danca, Nutricao],
        carosselText: [
            "O equilíbrio emocional em dias como os atuais não é algo simples de alcançar, para manter a saúde mental resolva o que está ao seu alcance. Informe-se, qualifique-se, repense e principalmente CUIDE-SE.  A Voskhod-Bem traz opções de serviços para complementar a sua rotina com a dose certa de autocuidado",
            "Cada aula do Yoga foi é aplicada com muito carinho para que você possa tirar a mente do automático, se conectar com seu momento presente e abrir caminho para uma experiência transformadora. Feito pra te movimentar e te relaxar.",
            "A prática da musculação é vista por muitos apenas como uma maneira de aumentar a massa muscular, no entanto esse tipo de atividade física possui inúmeros benefícios, sendo inclusive capaz de combater a DEPRESSÃO, por exemplo.Além disso, a musculação melhora o condicionamento cardiorrespiratório, aumenta a densidade óssea e garante mais disposição física",
            "Há diversas pesquisas que associam as vantagens de movimentar o corpo embalado por um ritmo musical à prevenção de doenças e a melhoria no quadro clínico, quando já há um problema de saúde instalado. Quando a pessoa se envolve com a dança, é quase imediata a elevação da autoestima e a sensação de bem-estar.",
            "Nutrição é o processo de fornecimento aos organismos animais e vegetais dos nutrientes necessários para a vida. Uma boa nutrição e uma dieta adequada, bem equilibrada combinada com atividade física regular é um dos pilares da boa saúde.",
        ],
    }),
};
</script>

<style scoped>
.text-carrousell {
    text-align: justify;
    width: 80%;
}
</style>
