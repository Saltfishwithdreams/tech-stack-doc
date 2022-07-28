import {createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('@/views/home/index.vue'),
    //     meta:{
    //         identification:'home'
    //     }
    // },
    //登录
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
