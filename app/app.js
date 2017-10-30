const router = new VueRouter({
    routes: [
        { path: '/', component: {template: "<div>replaced!</div>" }}
    ]
})

const app = new Vue({router: router}).$mount('#main-container')
