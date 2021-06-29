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
                <i
                    v-bind:class="item.classes"
                    class="la-4x footer-title-icon"
                ></i>
            </a>
        </div>
    </div>
    <div class="copyright">© 2021 - Benjamin Bouillot</div>
</template>

<script lang="ts">
    import { ItemIconLink } from '@/type';
    import { Vue } from 'vue-class-component';

    export default class FooterIcons extends Vue {
        get itemsIconsLink(): ItemIconLink[] {
            return [
                {
                    classes: 'lab la-github',
                    link: 'https://github.com/Benio-B',
                    link_label: 'GitHub',
                },
                {
                    classes: 'lab la-linkedin-in',
                    link: 'https://www.linkedin.com/in/b-bouillot',
                    link_label: 'Linkedin',
                },
                {
                    classes: 'las la-at',
                    link: 'mailto:benjamin.bouillot@live.fr',
                    link_label: this.$t('send_mail'),
                },
            ];
        }
    }
</script>
