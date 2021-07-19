<template>
    <div class="about-me-container-alarm">
        <div class="about-me-container-alarm-hour-arrow-round">
            <div class="about-me-container-alarm-hour-arrow">
                <div>07 : 00</div>
                <about-me-arrow />
            </div>
            <div class="about-me-container-alarm-round-grey">
                <div class="about-me-container-alarm-round-white">
                    <i class="las la-clock about-me-container-alarm-icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import AboutMeArrow from '@/components/AboutMe/AboutMeArrow.vue';

    @Options({ components: { AboutMeArrow } })
    class AboutMeAlarmCard extends Vue {}

    export default AboutMeAlarmCard;
</script>
