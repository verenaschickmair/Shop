// import Vue from 'vue'
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter)

import { createRouter, createWebHistory } from 'vue-router'

import Signin from './components/auth/Signin'

import ProductList from './components/product/ProductList'
import CartList from './components/cart/CartList'
import ProductItem from './components/product/ProductItem'
import Checkout from './components/cart/Checkout'

import NotFound from './components/error/NotFound'

const routes = [
    {
        path: '/login',
        component: Signin,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if(token) next('/');
            else next();
        }
    },
    {
        path: '/',
        component: ProductList
    },
    {
        path: '/cart',
        component: CartList
    },
    {
        path: '/checkout',
        component: Checkout
    },
    {
        path: '/products/:id', //Doppelpunkt -> dynamisch
        component: ProductItem,
        props: true, //dynamische Argumente werden hiermit in die Props in der Komponente geschrieben
    },
    //VUE.JS 2
    // {
    //     path: '*',
    //     component: NotFound
    // },

    //VUE.JS 3
    {
        path: '/:pathMatch(.*)*', //CATCH ALL
        component: NotFound
    },
]

//VUE.JS 2 CODE
// const router = new VueRouter({
//     mode: 'history',
//     routes
// })

//VUE.JS 3 CODE
const router = createRouter({
    history: createWebHistory(),
    routes
})

//Globaler Route Guard - wird vor jedem Routing Aufruf ausgeführt
router.beforeEach((to, from, next) =>{
    const token = localStorage.getItem('token');
    if(!token && to.path !== '/login')
        next('/login');
    else
        next();
});

export default router;