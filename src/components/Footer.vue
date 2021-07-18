<template>
    <v-footer color="blue darken-4" padless>
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link.titulo" color="#F4D03F" text rounded class="my-2">
                <router-link :to="link.path">
                    {{ link.titulo }}
                </router-link>
            </v-btn>
            <v-col class="blue darken-4 py-4 text-center" style="color: #F4D03F " cols="12">
                {{ new Date().getFullYear() }}
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            { titulo: "Início", path: "/" },
            { titulo: "Sobre", path: "/sobre" },
            { titulo: "Fale conosco", path: "/fale-conosco" },
        ],
    }),
};
</script>

<style scoped>
a,
a :visited {
    text-decoration: none;
}
</style>
