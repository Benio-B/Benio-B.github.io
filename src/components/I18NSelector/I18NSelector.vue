<template>
    <div class="selector-language-container">
        <div class="can-toggle demo-rebrand-2">
            <input
                id="e"
                type="checkbox"
                class="selector-language-checkbox"
                @change="updateLanguage($event)"
                v-bind:checked="
                    getLocalesToDisplay()[0].toLowerCase() ===
                        $i18n.locale.toLowerCase()
                "
            />
            <label for="e" class="selector-language-label">
                <div
                    class="selector-language-switch"
                    v-bind:data-checked="getLocalesToDisplay()[0]"
                    v-bind:data-unchecked="getLocalesToDisplay()[1]"
                />
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import { AvailableLocales } from '@/i18n/locales';
    import { Vue } from 'vue-class-component';
    import { Mutation } from 'vuex-class';

    export default class Experiences extends Vue {
        @Mutation
        private readonly SET_LANGUAGE!: (lang: string) => void;

        updateLanguage(lang: Event): void {
            if (!lang.target || !(lang.target instanceof HTMLInputElement)) {
                return;
            }

            const newLanguage = Object.values(this.$i18n.availableLocales).find(
                l => l !== this.$i18n.locale
            );
            if (!newLanguage) {
                throw Error('Bad new language');
            }
            this.$i18n.locale = newLanguage;
            this.SET_LANGUAGE(newLanguage);
        }

        getLocalesToDisplay(): string[] {
            return Object.values(AvailableLocales)
                .sort()
                .map(
                    locale => locale.charAt(0).toUpperCase() + locale.slice(1)
                );
        }
    }
</script>
