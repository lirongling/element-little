import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comm from '../views/Comm'
import { Search } from 'vant';

Vue.use(VueRouter)
Vue.use(Search);

const routes = [{
        path: '/home',
        // 重定向
        redirect: '/'
    },
    {
        path: "/",
        component: Comm,
        children: [{
            path: '/',
            name: "home",
            component: Home,
            meta: {
                title: '首页'
            }
        }],
    },

    {
        path: "/mine",
        component: Comm,
        children: [{
            path: '/',
            name: "mine",
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Mine.vue'),
            meta: {
                title: '我的'
            }
        }],
    },

    {
        path: "/order",
        component: Comm,
        children: [{
            path: '/',
            name: "order",
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Order.vue'),
            meta: {
                title: '订单'
            }
        }],
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to)
    document.title = to.matched[1].meta.title
    let user = localStorage.getItem('user')
    if (to.path === '/login' || to.path === '/register' || to.path === '/') {
        next()
    } else {
        user ? next() : next('/login')
    }
})

export default router