<template>
    <about-me-displayer />
</template>

<script lang="ts">
    import AboutMeDisplayer from '../../components/AboutMe/AboutMeDisplayer.vue';
    import { Options, Vue } from 'vue-class-component';

    @Options({ components: { AboutMeDisplayer } })
    class AboutMe extends Vue {}

    export default AboutMe;
</script>
