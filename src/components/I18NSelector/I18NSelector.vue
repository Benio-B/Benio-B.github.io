<template>
    <div class="selector-language-container">
        <input
            id="selector-language"
            type="checkbox"
            class="selector-language-checkbox"
            v-on:change="updateLanguage($event)"
            v-bind:aria-label="
                $t('switch_language', { language: getLongLocale() })
            "
            v-bind:checked="
                getLocalesToDisplay()[0].toLowerCase() ===
                $i18n.locale.toLowerCase()
            "
        />
        <label
            for="selector-language"
            class="selector-language-switch"
            v-bind:data-checked="getLocalesToDisplay()[0]"
            v-bind:data-unchecked="getLocalesToDisplay()[1]"
        />
    </div>
</template>

<script lang="ts">
    import { AvailableLocales, getLongLocale } from '@/i18n/locales';
    import { Vue } from 'vue-class-component';
    import { Mutation } from 's-vuex-class';
    import type { Locale } from 'vue-i18n';

    export default class Experiences extends Vue {
        @Mutation
        private readonly SET_LANGUAGE!: (lang: string) => void;

        updateLanguage(lang: Event): void {
            if (!lang.target || !(lang.target instanceof HTMLInputElement)) {
                return;
            }

            const new_language = Object.values(
                this.$i18n.availableLocales
            ).find((locale: Locale) => locale !== this.$i18n.locale);
            if (!new_language) {
                throw Error('Bad new language');
            }
            this.$i18n.locale = new_language;
            this.SET_LANGUAGE(new_language);
        }

        getLocalesToDisplay(): string[] {
            return Object.values(AvailableLocales).sort();
        }

        getLongLocale(): string {
            const not_selected_locale = Object.values(
                this.$i18n.availableLocales
            ).find((locale: Locale) => locale !== this.$i18n.locale);

            if (!not_selected_locale) {
                throw Error('Bad not selected language');
            }

            return getLongLocale(not_selected_locale);
        }
    }
</script>
