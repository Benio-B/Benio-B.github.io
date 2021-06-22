import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { getStore } from './store';
import { createI18n } from 'vue-i18n';
import {
    messages,
    defaultLocale,
    fallbackLocale,
    datetimeFormats,
} from '@/i18n';
import { PhSuitcase, PhMartini, PhHouse, PhGraduationCap } from 'phosphor-vue';

const i18n = createI18n({
    messages,
    locale: defaultLocale(),
    fallbackLocale: fallbackLocale,
    datetimeFormats,
});

const app = createApp(App);

app.use(i18n);
app.use(getStore(import.meta.env.PROD));
app.use(router);
app.component('ph-house', PhHouse);
app.component('ph-suitcase', PhSuitcase);
app.component('ph-martini', PhMartini);
app.component('ph-graduation-cap', PhGraduationCap);
app.mount('#app');
