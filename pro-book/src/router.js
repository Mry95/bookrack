import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            name: 'home',
            component: () =>
                import ('./views/home.vue')
        },
        {
            path: '/classify',
            name: 'classify',
            component: () =>
                import ('./views/classify.vue')
        },
        {
            path: '/paihang',
            name: 'paihang',
            component: () =>
                import ('./views/paihang.vue')
        },
        {
            path: '/bookrack',
            name: 'bookrack',
            component: () =>
                import ('./views/bookrack.vue')
        }
    ]
})