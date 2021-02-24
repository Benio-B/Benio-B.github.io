import { AvailableLocales } from './locales';

import en from './en.json';
import fr from './fr.json';

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
