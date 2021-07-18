import Vue from "vue";
import VueRouter from "vue-router";
import Entretenimento from "../views/Entretenimento.vue";
import Fisica from "../views/Fisica.vue";
import Mental from "../views/Mental.vue";
import Nutricao from "../views/Nutricao.vue";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/entretenimento",
        name: "Entretenimento",
        component: Entretenimento,
    },
    {
        path: "/saude-fisica",
        name: "Fisica",
        component: Fisica,
    },
    {
        path: "/saude-mental",
        name: "Mental",
        component: Mental,
    },
    {
        path: "/nutricao",
        name: "Nutricao",
        component: Nutricao,
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: Sobre,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
