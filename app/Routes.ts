import HomePage from "./components/routed/HomePage.vue"
import About from "./components/routed/About.vue"
import PoCPage from "./components/routed/PoCPage.vue"

export default [ 
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: About },
    { path: "/test", name: "test", component: PoCPage }
 ];