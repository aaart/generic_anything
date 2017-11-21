import Vue from "vue"
import VueApp from "VueApp"

function mountApp(appData: any): VueApp {
    return new VueApp(appData).$mount();
}


export { mountApp }
