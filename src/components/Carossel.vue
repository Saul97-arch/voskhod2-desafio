<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-carrousell">
            {{ carosselText[i] }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Carrosel",
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    carosselText: [
      "Ter um equilíbrio emocional em dias como os atuais não é algo simples de alcançar, para manter a saúde mental resolva o que está ao seu alcance. Informe-se, qualifique-se, repense e principalmente CUIDE-SE",
      "Cada aula do Yoga foi criada com muito carinho para que você possa tirar a mente do automático, se conectar com seu momento presente e abrir caminho para uma experiência transformadora através do yoga.",
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