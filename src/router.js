import{ createRouter, createWebHistory } from 'vue-router';

import AppHome from "./pages/AppHome.vue";
import ListMain from "./pages/ListMain.vue";
import Detail from "./pages/Detail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'listmain',
            component: ListMain
        },
        
        {
            path: '/blog/:slug',
            name: 'detail',
            component: Detail
        },
    ]
});

export{ router};