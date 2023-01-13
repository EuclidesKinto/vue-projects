import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/hero',
        name: 'hero',
        component: () => import('./components/Hero.vue')
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./components/Calendar.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;