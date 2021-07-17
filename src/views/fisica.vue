<template>
    <v-app>
        <CardView />
    </v-app>
</template>

<script>
import CardView from '../components/CardView.vue'

export default {
  async mounted() {
    this.dadosProfissionais = await this.getData();
    console.log(this.dadosProfissionais);
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

  components: {
    CardView
  },


  data() {
    return {
      dadosProfissionais: [],
    };
  },
};
</script>