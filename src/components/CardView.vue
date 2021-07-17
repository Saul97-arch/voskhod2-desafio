<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      class="imagem-profissional"
      :src="imagem"
    ></v-img>

    <v-card-title>{{nome}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">4.5 (413)</div>
      </v-row>

      <div class="detalhe-card">{{servicos}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Agende a sua visita</v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>Segunda</v-chip>

        <v-chip>Terça</v-chip>

        <v-chip>Quarta</v-chip>

        <v-chip>Quinta</v-chip>

        <v-chip>Sexta</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reservar
      </v-btn>
    </v-card-actions>
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

    props: {
        imagem: {
            type: String,
            
            
        },
        local: {
            type: String,
           
        },
        nome: {
            type: String,
            
        },
        servicos: {
            type:[],
           
        },
        signo: {
            type: String,
           
        }

    }
  },
};
</script>

<style scoped>
.detalhe-card {
  padding-top: 15px;
}
</style>