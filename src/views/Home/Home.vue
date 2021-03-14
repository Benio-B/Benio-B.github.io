<template>
    <div class="title-view">
        <h1>
            <div class="home-presentation-title-container">
                {{ $t('home.presentation_title') }}
                <div>
                    {{ $t('home.presentation_title_company_name_at') }}
                    <a
                        ref="titleCompanyNameLink"
                        class="home-presentation-title-company-name"
                        href="https://www.enalean.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ $t('home.presentation_title_company_name') }}
                    </a>
                </div>
            </div>
        </h1>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_name') }}
        </div>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_other') }}
        </div>
        <div class="home-presentation-sentence">
            {{ $t('home.presentation_final') }}
        </div>
        <div class="home-presentation-resume-container">
            {{ $t('home.presentation_cv') }}
            <a href="/assets/cv.pdf" download>
                {{ $t('home.presentation_cv_download') }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    @Options({
        components: {
            FontAwesomeIcon,
        },
    })
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
    }
</script>
