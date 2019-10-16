import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import './styles/basic-styles.scss';
import routes from './routes/routes';
Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')