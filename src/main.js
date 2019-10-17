import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import App from './App.vue'
import './styles/basic-styles.scss';
import routes from './routes/routes';
import { store } from './store'

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
