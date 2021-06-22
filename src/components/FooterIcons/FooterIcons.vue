<template>
    <div class="footer-title-icons-container">
        <div
            v-for="item in itemsIconsLink"
            v-bind:key="item.link_label"
            class="footer-title-icon-container"
        >
            <a
                v-bind:href="item.link"
                v-bind:aria-label="item.link_label"
                target="_blank"
                rel="noopener noreferrer"
            >
                <component
                    v-bind:is="item.component_name"
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
    class FooterIcons extends Vue {
        get itemsIconsLink(): ItemIconLink[] {
            return [
                {
                    component_name: 'PhGithubLogo',
                    link: 'https://github.com/Benio-B',
                    link_label: 'GitHub',
                },
                {
                    component_name: 'PhLinkedinLogo',
                    link: 'https://www.linkedin.com/in/b-bouillot',
                    link_label: 'Linkedin',
                },
                {
                    component_name: 'PhAt',
                    link: 'mailto:benjamin.bouillot@live.fr',
                    link_label: this.$t('send_mail'),
                },
            ];
        }
    }

    export default FooterIcons;
</script>
