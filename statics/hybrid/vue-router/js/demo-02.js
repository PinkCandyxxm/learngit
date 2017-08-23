const User = {
    template: '<div>user {{ $route.params.id }}</div>'
};
const UserPost = {
    template: '<div>user {{ $route.params.id }} <br>post {{ $route.params.content }}</div>'
};
const router = new VueRouter({
    routes: [{
        path: '/user/:id',
        component: User
    }, {
        path: '/user/:id/post/:content',
        component: UserPost
    }]
});
const app = new Vue({ router }).$mount('#app');