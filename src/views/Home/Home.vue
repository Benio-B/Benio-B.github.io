<template>
    <div class="title-view">
        <div class="home-presentation-title-container">
            {{ $t('home.presentation_title') }}
            <div>
                {{ $t('home.presentation_title_company_name_at') }}
                <a
                    ref="titleCompanyNameLink"
                    class="home-presentation-title-company-name"
                    href="https://www.enalean.com/"
                >
                    {{ $t('home.presentation_title_company_name') }}
                </a>
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
    </div>
    <div class="home-title-icons-container">
        <div
            v-for="item in itemsIconsLink"
            v-bind:key="item.iconName"
            class="home-title-icon-container"
        >
            <a v-bind:href="item.link">
                <font-awesome-icon
                    class="home-title-icon"
                    v-bind:icon="[item.iconNamePrefix, item.iconName]"
                    size="3x"
            /></a>
        </div>
    </div>
</template>

<script lang="ts">
    import { ItemIconLink } from '@/type';
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

        get itemsIconsLink(): ItemIconLink[] {
            return [
                {
                    iconName: 'github',
                    iconNamePrefix: 'fab',
                    link: 'https://github.com/Benio-B',
                },
                {
                    iconName: 'linkedin',
                    iconNamePrefix: 'fab',
                    link: 'www.linkedin.com/in/benjamin-bouillot',
                },
                {
                    iconName: 'at',
                    iconNamePrefix: 'fas',
                    link: 'mailto:benjamin.bouillot@live.fr',
                },
            ];
        }

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
