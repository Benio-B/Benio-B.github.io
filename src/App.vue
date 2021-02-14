<template>
    <burger-menu />
    <div class="main-page">
        <font-awesome-icon icon="bars" />
        Good morning here!
    </div>
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
