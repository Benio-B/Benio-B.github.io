<template>
    <burger-menu />
    <router-view></router-view>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import BurgerMenu from './components/Menu/BurgerMenu.vue';

    @Options({
        components: {
            BurgerMenu,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss">
    @import '@/styles/_main.scss';
</style>
