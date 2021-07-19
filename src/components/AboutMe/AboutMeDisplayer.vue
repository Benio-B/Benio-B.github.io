<template>
    <div class="about-me-main-container">
        <div class="home-presentation-title-container">
            {{ $t('about_me.title') }}
            <div class="about-me-subtitle">{{ $t('about_me.subtitle') }}</div>
        </div>
        <div class="about-me-container-timeline">
            <about-me-alarm-card />
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import AboutMeAlarmCard from '@/components/AboutMe/AboutMeAlarmCard.vue';

    @Options({ components: { AboutMeAlarmCard } })
    class AboutMeDisplayer extends Vue {}

    export default AboutMeDisplayer;
</script>
