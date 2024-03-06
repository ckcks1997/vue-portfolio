import {createRouter, createWebHistory} from "vue-router";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: About},
        { path: '/portfolio', component: Portfolio},
    ]
})


export default  router;