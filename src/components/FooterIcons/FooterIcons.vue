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
                <font-awesome-icon
                    class="footer-title-icon"
                    v-bind:icon="[item.iconNamePrefix, item.iconName]"
                    size="3x"
            /></a>
        </div>
    </div>
</template>

<script lang="ts">
    import { ItemIconLink } from '@/type';
    import { Vue } from 'vue-class-component';

    export default class FooterIcons extends Vue {
        get itemsIconsLink(): ItemIconLink[] {
            return [
                {
                    iconName: 'github',
                    iconNamePrefix: 'fab',
                    link: 'https://github.com/Benio-B',
                    linkLabel: 'GitHub',
                },
                {
                    iconName: 'linkedin',
                    iconNamePrefix: 'fab',
                    link: 'https://www.linkedin.com/in/benjamin-bouillot',
                    linkLabel: 'Linkedin',
                },
                {
                    iconName: 'at',
                    iconNamePrefix: 'fas',
                    link: 'mailto:benjamin.bouillot@live.fr',
                    linkLabel: this.$t('sendMail'),
                },
            ];
        }
    }
</script>
