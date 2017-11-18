import { Provide } from 'vue-inversify-decorator'
import { container } from "./inversify.config"
import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "./Routes";
import Layout from "./Layout.vue";
import "reflect-metadata";

import SERVICE_IDENTIFIER from "./ServiceIdentifier"
import Pet from "./poc/Pet"
import Dog from "./poc/Dog"
import Cat from "./poc/Cat"
import { Component } from 'vue-property-decorator';

Vue.use(VueRouter);
Vue.config.productionTip = false;

@Component({})
@Provide(container)
class VueApp extends Vue {};

new VueApp({
  router: new VueRouter({routes: Routes}),
  template: '<layout />',
  components: { Layout },
}).$mount("#app");

//
