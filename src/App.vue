<template>
    <nav aria-label="Menu"><burger-menu /></nav>
    <main><router-view></router-view></main>
    <nav aria-label="Language"><i-18-n-selector /></nav>
    <footer><footer-icons /></footer>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenu from './components/Menu/BurgerMenu.vue';
    import I18NSelector from './components/I18NSelector/I18NSelector.vue';
    import FooterIcons from './components/FooterIcons/FooterIcons.vue';
    @Options({
        components: {
            BurgerMenu,
            I18NSelector,
            FooterIcons,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    @import '@/styles/_main.scss';
</style>
