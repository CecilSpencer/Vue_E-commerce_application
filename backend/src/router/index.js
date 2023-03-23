import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import PasswordReset from '../views/PasswordReset.vue'
import RequestReset from '../views/RequestReset.vue'
import AppLayout from '../views/AppLayout.vue'
import Reports from '../views/Reports.vue'
import Users from '../views/Users.vue'
import Products from '../views/Products.vue'
import store from '../store'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            RequiresAuth: true
        },
        children:[
            {
                path: 'users',
                name: 'app.users',
                component: Users
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
            {
                path: 'reports',
                name: 'app.reports',
                component: Reports
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            RequiresGuest: true
        },
        component: Login
    },
    {
        path: '/reset-password/:token',
        name: 'reset-password',
        meta: {
            RequiresGuest: true
        },
        component: PasswordReset
    },
    {
        path: '/request-password',
        name: 'request-password',
        meta: {
            RequiresGuest: true
        },
        component: RequestReset
    },
    {
            path: '/:pathMatch(.*)',
            name: 'not-found',
            meta: {
                RequiresGuest: true
            },
            component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.RequiresAuth && !store.state.user.token){
        next({name: 'login'})
    }else if(to.meta.RequiresGuest && store.state.user.token){
        next({name:'app'})
    }else{
        next()
    }
})

export default router