import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Config from '../views/Config.vue'
import Credit from '../views/Credit.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/config',
        name: 'Configuration',
        component: Config
    },
    {
        path: '/credit',
        name: 'Crédit',
        component: Credit
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router