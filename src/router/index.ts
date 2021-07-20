import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Experiences from '@/views/Experiences/Experiences.vue';
import Education from '@/views/Education/Education.vue';
import Projects from '@/views/Project/Projects.vue';
import AboutMe from '@/views/AboutMe/AboutMe.vue';

const routes: Array<RouteRecordRaw> = [];

routes.push({ path: '/', component: Home });
routes.push({ path: '/experiences', component: Experiences });
routes.push({ path: '/education', component: Education });
routes.push({ path: '/projects', component: Projects });
routes.push({ path: '/about', component: AboutMe });
routes.push({ path: '/:pathMatch(.*)*', redirect: '/' });

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
