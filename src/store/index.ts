import { createStore, Store } from 'vuex';
import { defaultLocale } from '@/i18n';

export interface State {
    locale: string;
    is_production: boolean;
}

export function getStore(is_production: boolean): Store<State> {
    return createStore({
        state: {
            locale: defaultLocale(),
            is_production,
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
}
