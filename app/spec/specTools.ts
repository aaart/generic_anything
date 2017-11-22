import Vue from "vue";
import VueRouter from "vue-router";
import VueApp from "VueApp"
import Routes from "Routes"
import * as _ from "lodash";

function mountApp(appData: any): VueApp {
    Vue.use(VueRouter);
    var mergedData = _.merge(appData, { router: new VueRouter({routes: Routes}) });
    return new VueApp(mergedData).$mount();
}


export { mountApp }
