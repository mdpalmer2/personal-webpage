import Vue from 'vue';
import VueRouter from 'vue-router'; // , createWebHistory
// Vue.config.productionTip = false;

import App from './App.vue';
import About from './components/About.vue';
import Blog from './components/Blog.vue';
import Resume from './components/Resume.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  // history: createWebHistory(),
  routes: [
    {path: '/About', component: About},
    {path: '/Blog', component: Blog},
    {path: '/Resume', component: Resume},
  ]
});

const app = new Vue({
  render: h => h(App),
  router,
});

app.$mount('#app');
