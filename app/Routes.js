import HomePage from "./components/routed/HomePage.vue"
import About from "./components/routed/About.vue"

export default [ 
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: About }
 ];