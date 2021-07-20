<template>
    <div class="title-view">
        <div>
            <div class="home-presentation-title-container">
                {{ $t('home.presentation_title') }}
                <div>
                    {{ $t('home.presentation_title_company_name_at') }}
                    <a
                        ref="titleCompanyNameLink"
                        class="link-text-handle"
                        href="https://www.enalean.com/"
                        rel="noopener noreferrer"
                    >
                        {{ $t('home.presentation_title_company_name') }}
                    </a>
                </div>
            </div>
        </div>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_name') }}
        </div>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_other') }}
        </div>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_final') }}
        </div>
        <div>
            {{ $t('home.presentation_cv') }}
            <a
                ref="resumeLink"
                v-bind:href="resume_url"
                class="link-text-handle link-text-handle-small"
            >
                {{ $t('home.presentation_cv_download') }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { handleLinkHover } from '@/scripts/link-hover-handler';

    export default class Home extends Vue {
        mounted(): void {
            const title_company_name_link = this.$refs.titleCompanyNameLink;

            if (!(title_company_name_link instanceof HTMLElement)) {
                throw Error('No titleCompanyNameLink refs');
            }

            handleLinkHover(title_company_name_link);

            const resume_link = this.$refs.resumeLink;

            if (!(resume_link instanceof HTMLElement)) {
                throw Error('No resumeLink refs');
            }

            handleLinkHover(resume_link);
        }

        get resume_url(): string {
            if (this.$i18n.locale.toLowerCase() === 'fr') {
                return '/assets/Benjamin_Bouillot_CV_FR.pdf';
            }
            return '/assets/Benjamin_Bouillot_CV_EN.pdf';
        }
    }
</script>
