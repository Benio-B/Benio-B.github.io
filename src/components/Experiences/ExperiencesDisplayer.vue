<template>
    <div>experiences displayer</div>
    <div class="experiences-container">
        <experience-displayer
            v-for="experience in experiences"
            v-bind:key="experience.title"
            v-bind:experience="experience"
        />
    </div>
</template>

<script lang="ts">
    import { Experience } from '@/type';
    import { Options, Vue } from 'vue-class-component';
    import ExperienceDisplayer from './ExperienceDisplayer.vue';

    @Options({ components: { ExperienceDisplayer } })
    export default class ExperiencesDisplayer extends Vue {
        get experiences(): Experience[] {
            return [
                {
                    left: true,
                    right: false,
                    title: this.$t('experiences.enalean_1021_present.title'),
                    content_1: this.$t(
                        'experiences.enalean_1021_present.content_1'
                    ),
                    date_begin: new Date(2020, 9),
                    date_end: 'Present',
                    enterprise: 'Enalean',
                    content_2: this.$t(
                        'experiences.enalean_1021_present.content_2'
                    ),
                    content_2_link_begin:
                        'experiences.enalean_1021_present.content_2_link_begin',
                    content_2_link:
                        'https://www.youtube.com/watch?v=kWJij7gUpHA',
                    content_2_link_end:
                        'experiences.enalean_1021_present.content_2_link_end',
                    content_3: this.$t(
                        'experiences.enalean_1021_present.content_3'
                    ),
                    content_4: this.$t(
                        'experiences.enalean_1021_present.content_4'
                    ),
                },
            ];
        }
    }
</script>
