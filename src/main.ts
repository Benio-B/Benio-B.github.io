import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { createI18n } from 'vue-i18n';
import { messages, defaultLocale, fallbackLocale } from '@/i18n';
import {
    faBars,
    faIgloo,
    faUser,
    faBeer,
    faTimes,
    faAddressCard,
    faGraduationCap,
    faAt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faBars);
library.add(faIgloo);
library.add(faUser);
library.add(faBeer);
library.add(faTimes);
library.add(faAddressCard);
library.add(faGraduationCap);
library.add(faGithub);
library.add(faLinkedin);
library.add(faAt);

const i18n = createI18n({
    messages,
    locale: defaultLocale(),
    fallbackLocale: fallbackLocale,
});

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
