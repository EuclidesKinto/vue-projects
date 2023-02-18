import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/hero',
        name: 'hero',
        component: () => import('./pages/Hero.vue')
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./pages/Calendar.vue')
    },
    {
        path: '/markdown',
        name: 'markdown',
        component: () => import('./pages/Markdown.vue')
    },
    {
        path: '/slider',
        name: 'slider',
        component: () => import('./pages/Slider.vue')
    },
    {
        path: '/calculator',
        component: () => import('./pages/Calculator.vue')
    },
    {
        path: '/review',
        component: () => import('./pages/Review.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;