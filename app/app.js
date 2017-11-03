import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './Layout.vue'
import Page from './components/Page.vue'
import AnotherPage from './components/AnotherPage.vue'
import routes from 'routes'

// new Vue({
//   el: '#app',
//   render: h => h(Home)
// })

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: new VueRouter({routes}),
  template: '<Layout />',
  components: { Layout }
});

//
