<template>
  <div>
    <p>
      Esse momento pode ter diversos impactos negativos na qualidade de vida das
      pessoas. Afinal, isso pode fazer com que elas se sintam mais cansadas,
      tenham uma queda de produtividade no trabalho , prejudiquem sua saúde
      física e mental. E nós da Voskhod estamos aqui para poder proporcionar
      para você, com a ajuda de nossos melhores profissionais, consultas
      individuais para o seu melhor desempenho fisíco e mental. Clique já e
      aproveite!
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
      const response = await fetch(
        "https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json"
      );

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