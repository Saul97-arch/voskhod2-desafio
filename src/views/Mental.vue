<template>
  <v-main v-if="dadosProfissionais">
    <CardView 
      :imagem="dadosProfissionais[1].imagem"
      :nome="dadosProfissionais[1].nome"
      :servicos="dadosProfissionais[1].servicos"
    />
     <CardView 
      :imagem="dadosProfissionais[4].imagem"
      :nome="dadosProfissionais[4].nome"
      :servicos="dadosProfissionais[4].servicos"
    />

     <CardView 
      :imagem="dadosProfissionais[7].imagem"
      :nome="dadosProfissionais[7].nome"
      :servicos="dadosProfissionais[7].servicos"
    />
  </v-main>
</template>

<script>
import CardView from "../components/CardView.vue";

export default {
  name:'Mental',
  async mounted() {
    this.dadosProfissionais = await this.getData();
    console.log(this.dadosProfissionais);
  },
  components: {
    CardView
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