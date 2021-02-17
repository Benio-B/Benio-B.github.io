import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import CV from '@/views/CV/CV.vue';
import Projects from '@/views/Project/Projects.vue';
import Contact from '@/views/Contact/Contact.vue';

const routes: Array<RouteRecordRaw> = [];

routes.push({ path: '/', component: Home });
routes.push({ path: '/cv', component: CV });
routes.push({ path: '/projects', component: Projects });
routes.push({ path: '/contact', component: Contact });

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
