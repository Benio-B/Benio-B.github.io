<template>
    <div class="title-view">
        <div>
            <div class="home-presentation-title-container">
                {{ $t('home.presentation_title') }}
                <div>
                    {{ $t('home.presentation_title_company_name_at') }}
                    <a
                        ref="titleCompanyNameLink"
                        class="home-presentation-title-company-name"
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
            <a v-bind:href="resume_url" class="home-presentation-resume-link">
                {{ $t('home.presentation_cv_download') }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    export default class Home extends Vue {
        private mouseIsLeaved = false;
        private animationIsEnded = false;

        mounted(): void {
            const titleCompanyNameLink = this.$refs.titleCompanyNameLink;

            if (!(titleCompanyNameLink instanceof HTMLElement)) {
                throw Error('No titleCompanyNameLink refs');
            }

            titleCompanyNameLink.addEventListener('mouseenter', () => {
                this.mouseIsLeaved = false;
                this.animationIsEnded = false;
                titleCompanyNameLink.classList.remove('mouse-leave');
                titleCompanyNameLink.classList.add('mouse-enter');
            });

            titleCompanyNameLink.addEventListener('transitionend', () => {
                if (this.mouseIsLeaved) {
                    titleCompanyNameLink.classList.add('mouse-leave');
                    titleCompanyNameLink.classList.remove('mouse-enter');
                }
                this.animationIsEnded = true;
            });

            titleCompanyNameLink.addEventListener('mouseleave', () => {
                if (this.animationIsEnded) {
                    titleCompanyNameLink.classList.add('mouse-leave');
                    titleCompanyNameLink.classList.remove('mouse-enter');
                }
                this.mouseIsLeaved = true;
            });
        }

        get resume_url(): string {
            if (this.$i18n.locale.toLowerCase() === 'fr') {
                return '/assets/Benjamin_Bouillot_CV_FR.pdf';
            }
            return '/assets/Benjamin_Bouillot_CV_EN.pdf';
        }
    }
</script>
