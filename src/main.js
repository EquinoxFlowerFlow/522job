import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {

  const { fullPath } = to

  if (!store.state.username && fullPath != '/login' ) {
    next('/login')
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
