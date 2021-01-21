import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const Cadastro = () => import('../views/Cadastro.vue')

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
    }
]

const router = new Router({ routes })
export default router