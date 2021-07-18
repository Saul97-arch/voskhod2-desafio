<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img v-if="imagem" class="imagem-profissional" :src="imagem"></v-img>

    <v-card-title>{{ nome }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="avaliacao"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ avaliacao }} {{ Math.floor(Math.random() * 500) }}
        </div>
      </v-row>
      <div
        class="detalhe-card red lighten-5"
        v-for="plataforma of plataformas"
        :key="plataformas[plataforma]"
      >
        {{ plataforma }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="nome">{{ nome }}</v-card-title>

    <v-card-text>
      <v-chip-group class="red lighten-5" column>
        Site <a :href="site">{{ site }}</a>
      </v-chip-group>
    </v-card-text>

    <v-card-text class="red lighten-5">
      {{ descricao }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardView",
  data: () => ({
    loading: false,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },

  props: {
    imagem: {
      type: String,
    },
    avaliacao: {
      type: Number,
    },
    nome: {
      type: String,
    },
    plataformas: {
      type: [],
    },
    descricao: {
      type: String,
    },
    site: {
      type: String,
    },
  },
};
</script>

<style scoped>
.detalhe-card {
  padding-top: 15px;
}

.v-card {
  background-color: #000;
}

.nome {
  color: #fff;
}
</style>