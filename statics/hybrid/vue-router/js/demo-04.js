Vue.use(VueRouter);
const Home = { template: '<div>this is home</div>' };
const Foo = { template: '<div>this is foo</div>' };
const Bar = { template: '<div>this is bar</div>' };
const router = new VueRouter({
    //mode: 'history',
    //base: '_dirname',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    }, {
        path: '/foo',
        name: 'foo',
        component: Foo
    }, {
        path: '/bar/:id',
        name: 'bar',
        component: Bar
    }]
});
new Vue({
    router,
    template: `
    <div id="app">
    <h1>Named Routes</h1>
    <p>Current route name:{{ $route.name }}</p>
    <ul>
    <li><router-link :to="{ name:'home' }">home</router-link></li> 
    <li><router-link :to="{ name:'foo' }">foo</router-link></li> 
    <li><router-link :to="{ name:'bar params:{ id:123 }' }">bar</router-link></li>
    </ul>
    <router-view class="view"></router-view>
    </div>`
}).$mount('#app');