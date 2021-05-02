<template>
    <nav aria-label="Menu" v-show="!is_production">
        <burger-menu
            v-on:on-display-menu="onDisplayMenu"
            v-on:on-hide-menu="onHideMenu"
        />
    </nav>
    <main v-show="!menuIsDisplaying"><router-view></router-view></main>
    <nav aria-label="Language" v-show="!menuIsDisplaying">
        <i-18-n-selector />
    </nav>
    <footer v-show="!menuIsDisplaying"><footer-icons /></footer>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenu from './components/Menu/BurgerMenu.vue';
    import I18NSelector from './components/I18NSelector/I18NSelector.vue';
    import FooterIcons from './components/FooterIcons/FooterIcons.vue';
    import { State } from 'vuex-class';

    @Options({
        components: {
            BurgerMenu,
            I18NSelector,
            FooterIcons,
        },
    })
    export default class App extends Vue {
        menuIsDisplaying = false;

        @State
        private readonly is_production!: boolean;

        onDisplayMenu(): void {
            this.menuIsDisplaying = true;
        }

        onHideMenu(): void {
            this.menuIsDisplaying = false;
        }
    }
</script>

<style lang="scss">
    @import '@/styles/_main.scss';
</style>
