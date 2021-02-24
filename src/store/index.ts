import { createStore } from 'vuex';
import { defaultLocale } from '@/i18n';

export default createStore({
    state: {
        locale: defaultLocale(),
    },
    mutations: {
        SET_LANGUAGE: (state, newLocale: string): void => {
            state.locale = newLocale;
            localStorage.setItem('locale', newLocale);
        },
    },
    actions: {},
    modules: {},
});
