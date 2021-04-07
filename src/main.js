import Vue from 'vue';
import VueRouter from 'vue-router'; // , createWebHistory
// Vue.config.productionTip = false;

import App from './App.vue';
import About from './components/About.vue';
import Blog from './components/Blog.vue';
import Resume from './components/Resume.vue';
import Home from './components/Home.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/About', component: About},
    {path: '/Blog', component: Blog},
    {path: '/Resume', component: Resume},
    {path: '/', component: Home}
  ]
});

const app = new Vue({
  render: h => h(App),
  router,
});

app.$mount('#app');
