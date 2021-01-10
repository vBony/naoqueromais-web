import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')

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
]

const router = new Router({ routes })
export default router