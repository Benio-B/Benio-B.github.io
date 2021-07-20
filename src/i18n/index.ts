import { AvailableLocales } from './locales';

import en from './en.json';
import fr from './fr.json';
import type { IntlDateTimeFormats } from 'vue-i18n';

export const messages = {
    [AvailableLocales.EN]: en,
    [AvailableLocales.FR]: fr,
};

export const defaultLocale = (): string => {
    const localeSaved = localStorage.getItem('locale');
    if (!localeSaved) {
        return AvailableLocales.FR;
    }
    return localeSaved;
};

export const fallbackLocale = AvailableLocales.EN;

export const datetimeFormats: IntlDateTimeFormats = {
    en: {
        very_short: {
            year: 'numeric',
            month: 'short',
        },
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
        },
    },
    fr: {
        very_short: {
            year: 'numeric',
            month: 'short',
        },
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        },
    },
};
