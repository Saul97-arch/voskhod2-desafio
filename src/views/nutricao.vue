<template>
    <v-app>
        <h1>Nutrição</h1>
    </v-app>
</template>


<script>
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
  data() {
    return {
      dadosProfissionais: [],
    };
  },
};
</script>