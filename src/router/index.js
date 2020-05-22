import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../pages/login'

const Login = () => import( /* webpackChunkName: "Home" */ '../pages/login')
const Home = () => import( /* webpackChunkName: "Home" */ '../pages/home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
