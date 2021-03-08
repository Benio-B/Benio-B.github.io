import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Experiences from '@/views/Experiences/Experiences.vue';
import Education from '@/views/Education/Education.vue';
import Projects from '@/views/Project/Projects.vue';

const routes: Array<RouteRecordRaw> = [];

routes.push({ path: '/', component: Home });
routes.push({ path: '/experiences', component: Experiences });
routes.push({ path: '/education', component: Education });
routes.push({ path: '/projects', component: Projects });

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
