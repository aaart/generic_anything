import HomePage from "pages/homePage/HomePage.vue"
import About from "pages/about/About.vue"
import PoCPage from "pages/pocPage/PoCPage.vue"

export default new Array<any>(
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: About },
    { path: "/test", name: "test", component: PoCPage }
) 