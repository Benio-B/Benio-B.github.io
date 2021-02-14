import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faIgloo,
    faUser,
    faBeer,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
library.add(faIgloo);
library.add(faUser);
library.add(faBeer);
library.add(faTimes);

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
