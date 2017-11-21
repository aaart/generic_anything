import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "Routes";
import VueApp from "VueApp"
import Layout from "./Layout.vue";


Vue.use(VueRouter);
Vue.config.productionTip = false;



new VueApp({
  router: new VueRouter({routes: Routes}),
  template: '<layout />',
  components: { Layout },
}).$mount("#app");

//
