Vue.component('home-page', {
    template: '<div>This is home page</div>'
});

Vue.component('sub-page', {
    template: '<div>sub page, yay!</div>'
});

const router = new VueRouter({
    routes: [
        { path: '/', component: Vue.component('home-page')},
        { path: '/sub', component: Vue.component('sub-page')}
    ]
})

const app = new Vue({router: router}).$mount('#main-container')
