<template>
    <v-main v-if="dadosProfissionais">
        <CardView :nome="dadosProfissionais[0].nome"/>

    </v-main>
</template>

<script>

import CardView from '../components/CardView.vue'

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