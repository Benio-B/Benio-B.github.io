<template>
    <burger-menu />
    <router-view></router-view>
    <i-18-n-selector />
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenu from './components/Menu/BurgerMenu.vue';
    import I18NSelector from './components/I18NSelector/I18NSelector.vue';
    @Options({
        components: {
            BurgerMenu,
            I18NSelector,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    @import '@/styles/_main.scss';
</style>
