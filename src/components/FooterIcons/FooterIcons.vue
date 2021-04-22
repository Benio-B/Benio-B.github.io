<template>
    <div class="footer-title-icons-container">
        <div
            v-for="item in itemsIconsLink"
            v-bind:key="item.iconName"
            class="footer-title-icon-container"
        >
            <a
                v-bind:href="item.link"
                v-bind:aria-label="item.linkLabel"
                target="_blank"
                rel="noopener noreferrer"
            >
                <component
                    v-bind:is="item.componentName"
                    class="footer-title-icon"
                    v-bind:size="50"
                    weight="bold"
                >
                </component>
            </a>
        </div>
    </div>
    <div class="copyright">© 2021 - Benjamin Bouillot</div>
</template>

<script lang="ts">
    import { ItemIconLink } from '@/type';
    import { Options, Vue } from 'vue-class-component';
    import { PhAt, PhGithubLogo, PhLinkedinLogo } from 'phosphor-vue';

    @Options({
        components: {
            PhAt,
            PhGithubLogo,
            PhLinkedinLogo,
        },
    })
    export default class FooterIcons extends Vue {
        get itemsIconsLink(): ItemIconLink[] {
            return [
                {
                    componentName: 'PhGithubLogo',
                    link: 'https://github.com/Benio-B',
                    linkLabel: 'GitHub',
                },
                {
                    componentName: 'PhLinkedinLogo',
                    link: 'https://www.linkedin.com/in/benjamin-bouillot',
                    linkLabel: 'Linkedin',
                },
                {
                    componentName: 'PhAt',
                    link: 'mailto:benjamin.bouillot@live.fr',
                    linkLabel: this.$t('sendMail'),
                },
            ];
        }
    }
</script>
