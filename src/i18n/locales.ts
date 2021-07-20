export const AvailableLocales = {
    EN: 'en',
    FR: 'fr',
};

type AvailableLocalesType =
    typeof AvailableLocales[keyof typeof AvailableLocales];

export const availableLocalesToDisplay = {
    [AvailableLocales.EN]: { language: 'English' },
    [AvailableLocales.FR]: { language: 'Français' },
};

export function getLongLocale(locale: string): string {
    if (!isAvailableLocale(locale)) {
        throw Error("Can't get language from " + locale);
    }

    return availableLocalesToDisplay[locale].language;
}

function isAvailableLocale(locale: string): locale is AvailableLocalesType {
    return Object.values(AvailableLocales).includes(
        locale as AvailableLocalesType
    );
}
