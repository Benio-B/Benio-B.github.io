<template>
    <nav aria-label="Menu" v-show="displayMenu">
        <burger-menu
            v-on:on-display-menu="onDisplayMenu"
            v-on:on-hide-menu="onHideMenu"
        />
    </nav>
    <div v-if="is_production" ref="clickToShowMenu" class="to-show-menu" />
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
    import { State } from 's-vuex-class';

    @Options({
        components: {
            BurgerMenu,
            I18NSelector,
            FooterIcons,
        },
    })
    class App extends Vue {
        $refs!: {
            clickToShowMenu: HTMLDivElement;
        };

        menuIsDisplaying = false;
        hasClick = false;

        @State
        private readonly is_production!: boolean;

        onDisplayMenu(): void {
            this.menuIsDisplaying = true;
        }

        onHideMenu(): void {
            this.menuIsDisplaying = false;
        }

        get displayMenu(): boolean {
            return !this.is_production || this.hasClick;
        }

        mounted(): void {
            if (this.is_production) {
                const element_to_click = this.$refs.clickToShowMenu;
                let nb_click = 0;
                element_to_click.addEventListener('click', () => {
                    nb_click++;
                    if (nb_click === 5) {
                        this.hasClick = true;
                    }
                });
            }
        }
    }

    export default App;
</script>

<style lang="scss">
    @use "./styles/_main.scss";
</style>
