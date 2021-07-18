<template>
    <div>
        <v-app-bar color="blue darken-4" class="app-top-bar" dark>
            <img @click="drawer = true" class="logo" :src="logo" alt="Logo" />

            <img @click="drawer = true" :src="fonte" class="fonte" alt="Voshkod-Bem" />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="nav-side-bar" absolute temporary app>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="blue darken-4">
                    <router-link to="/">
                        <v-list-item>
                            <v-avatar size="24">
                                <img :src="home" alt="Início" />
                            </v-avatar>
                            <v-list-item-title>Início</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/entretenimento">
                        <v-list-item>
                            <v-avatar size="24">
                                <img :src="entretenimento" alt="Entretenimento" />
                            </v-avatar>
                            <v-list-item-title>Entretenimento</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/nutricao">
                        <v-list-item>
                            <v-avatar size="24">
                                <img :src="nutricao" alt="Nutrição" />
                            </v-avatar>
                            <v-list-item-title>Nutrição</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/saude-fisica">
                        <v-list-item>
                            <v-avatar size="24">
                                <img :src="saudeFisica" alt="Saúde Física" />
                            </v-avatar>
                            <v-list-item-title>Saúde Física</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/saude-mental">
                        <v-list-item>
                            <v-avatar size="24">
                                <img :src="saudeMental" alt="Saúde Mental" />
                            </v-avatar>
                            <v-list-item-title>Saúde Mental</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import Logo from "../assets/imagens/logo.png";
import Fonte from "../assets/imagens/logo-fonte.png";
import Home from "../assets/imagens/home.jpg";
import Entretenimento from "../assets/imagens/entretenimento.jpg";
import SaudeFisica from "../assets/imagens/saude-fisica.jpg";
import SaudeMental from "../assets/imagens/saude-mental.jpg";
import Nutricao from "../assets/imagens/nutricao.jpg";

export default {
    name: "AppTopBar",
    data: () => ({
        logo: Logo,
        fonte: Fonte,
        home: Home,
        entretenimento: Entretenimento,
        saudeFisica: SaudeFisica,
        saudeMental: SaudeMental,
        nutricao: Nutricao,
        drawer: false,
        group: null,
    }),
};
</script>

<style scoped>
.logo {
    height: 40px;
}

.fonte {
    width: 250px;
}

.nav-side-bar a {
    text-decoration: none;
}

.nav-side-bar img {
    border-radius: 50%;
}

.app-top-bar img {
    cursor: pointer;
}
</style>
