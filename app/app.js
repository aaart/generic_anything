//require("bootstrap-webpack");
import _ from "lodash";

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "routes";

import Layout from './Layout.vue';

// new Vue({
//   el: '#app',
//   render: h => h(Home)
// })

Vue.use(VueRouter);
Vue.config.productionTip = false;

let mainViewModel = new Vue({
  el: '#app',
  router: new VueRouter({routes}),
  template: '<Layout />',
  components: { Layout }
});

//
