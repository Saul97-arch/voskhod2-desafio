<template>
  <v-main v-if="dadosProfissionais">
    <CardView 
      :imagem="dadosProfissionais[0].imagem"
      :nome="dadosProfissionais[0].nome"
      :servicos="dadosProfissionais[0].servicos"
    />

    <CardView 
      :imagem="dadosProfissionais[5].imagem"
      :nome="dadosProfissionais[5].nome"
      :servicos="dadosProfissionais[5 ].servicos"
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
  </v-main>
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