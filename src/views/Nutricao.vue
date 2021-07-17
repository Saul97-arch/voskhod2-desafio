<template>
  <v-main v-if="dadosProfissionais">
     <CardView 
      :imagem="dadosProfissionais[3].imagem"
      :nome="dadosProfissionais[3].nome"
      :servicos="dadosProfissionais[3].servicos"
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