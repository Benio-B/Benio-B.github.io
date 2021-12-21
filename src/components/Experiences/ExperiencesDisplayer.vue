<template>
    <div>
        <experience-displayer
            v-for="experience in experiences"
            v-bind:key="experience.title"
            v-bind:experience="experience" />
    </div>
</template>

<script lang="ts">
    import type { IExperience } from '@/type';
    import { Options, Vue } from 'vue-class-component';
    import ExperienceDisplayer from './ExperienceDisplayer.vue';

    @Options({ components: { ExperienceDisplayer } })
    class ExperiencesDisplayer extends Vue {
        get experiences(): IExperience[] {
            return [
                {
                    left: true,
                    right: false,
                    title: this.$t('experiences.wizbii_1022_present.title'),
                    date_begin: new Date(2020, 10),
                    date_end: this.$t(
                        'experiences.enalean_1021_present.date_end'
                    ),
                    localisation: this.$t(
                        'experiences.wizbii_1022_present.localisation'
                    ),
                    enterprise: this.$t(
                        'experiences.wizbii_1022_present.enterprise'
                    ),
                    summary: this.$t('experiences.wizbii_1022_present.summary'),
                    summary_technical: this.$t(
                        'experiences.wizbii_1022_present.summary_technical'
                    ),
                    summary_example_1: this.$t(
                        'experiences.wizbii_1022_present.summary_example_1'
                    ),
                    summary_example_2: this.$t(
                        'experiences.wizbii_1022_present.summary_example_2'
                    ),
                    summary_example_3: this.$t(
                        'experiences.wizbii_1022_present.summary_example_3'
                    ),
                    example_title: this.$t(
                        'experiences.wizbii_1022_present.example_title'
                    ),
                    example_1_title: this.$t(
                        'experiences.wizbii_1022_present.example_1_title'
                    ),
                    example_1_explanation: this.$t(
                        'experiences.wizbii_1022_present.example_1_explanation'
                    ),
                    example_1_explanation_2: this.$t(
                        'experiences.wizbii_1022_present.example_1_explanation_2'
                    ),
                    languages: this.$t(
                        'experiences.wizbii_1022_present.languages'
                    ),
                    tools: this.$t('experiences.wizbii_1022_present.tools'),
                },
                {
                    left: true,
                    right: false,
                    title: this.$t('experiences.enalean_1021_1022.title'),
                    date_begin: new Date(2020, 10),
                    date_end: new Date(2021, 10),
                    localisation: this.$t(
                        'experiences.enalean_1021_1022.localisation'
                    ),
                    enterprise: this.$t(
                        'experiences.enalean_1021_1022.enterprise'
                    ),
                    summary: this.$t('experiences.enalean_1021_1022.summary'),
                    summary_technical: this.$t(
                        'experiences.enalean_1021_1022.summary_technical'
                    ),
                    summary_example_1: this.$t(
                        'experiences.enalean_1021_1022.summary_example_1'
                    ),
                    summary_example_2: this.$t(
                        'experiences.enalean_1021_1022.summary_example_2'
                    ),
                    summary_example_3: this.$t(
                        'experiences.enalean_1021_1022.summary_example_3'
                    ),
                    example_title: this.$t(
                        'experiences.enalean_1021_1022.example_title'
                    ),
                    example_1_title: this.$t(
                        'experiences.enalean_1021_1022.example_1_title'
                    ),
                    example_1_explanation: this.$t(
                        'experiences.enalean_1021_1022.example_1_explanation'
                    ),
                    example_1_link_begin:
                        'experiences.enalean_1021_1022.example_1_link_begin',
                    example_1_link: 'https://youtu.be/kWJij7gUpHA',
                    example_1_link_end:
                        'experiences.enalean_1021_1022.example_1_link_end',
                    example_2_title: this.$t(
                        'experiences.enalean_1021_1022.example_2_title'
                    ),
                    example_2_explanation: this.$t(
                        'experiences.enalean_1021_1022.example_2_explanation'
                    ),
                    example_2_link_begin:
                        'experiences.enalean_1021_1022.example_2_link_begin',
                    example_2_link: 'https://www.scaledagileframework.com/',
                    example_2_link_end:
                        'experiences.enalean_1021_1022.example_2_link_end',
                    languages: this.$t(
                        'experiences.enalean_1021_1022.languages'
                    ),
                    tools: this.$t('experiences.enalean_1021_1022.tools'),
                    source_code_link_begin:
                        'experiences.enalean_1021_1022.source_code_link_begin',
                    source_code_link:
                        'https://github.com/Enalean/tuleap/commits?author=benjamin.bouillot@enalean.com',
                    source_code_link_end:
                        'experiences.enalean_1021_1022.source_code_link_end',
                },
                {
                    left: false,
                    right: true,
                    title: this.$t(
                        'experiences.enalean_work_study_master.title'
                    ),
                    summary: this.$t(
                        'experiences.enalean_work_study_master.summary'
                    ),
                    summary_technical: this.$t(
                        'experiences.enalean_work_study_master.summary_technical'
                    ),
                    date_begin: new Date(2019, 6),
                    date_end: new Date(2020, 9),
                    enterprise: this.$t(
                        'experiences.enalean_work_study_master.enterprise'
                    ),
                    localisation: this.$t(
                        'experiences.enalean_work_study_master.localisation'
                    ),
                    languages: this.$t(
                        'experiences.enalean_work_study_master.languages'
                    ),
                    tools: this.$t(
                        'experiences.enalean_work_study_master.tools'
                    ),
                    source_code_link_begin:
                        'experiences.enalean_work_study_master.source_code_link_begin',
                    source_code_link:
                        'https://github.com/Enalean/tuleap/tree/master/plugins/projectmilestones',
                    source_code_link_end:
                        'experiences.enalean_work_study_master.source_code_link_end',
                },
                {
                    left: true,
                    right: false,
                    enterprise: this.$t(
                        'experiences.enalean_internship_licence.enterprise'
                    ),
                    localisation: this.$t(
                        'experiences.enalean_internship_licence.localisation'
                    ),
                    title: this.$t(
                        'experiences.enalean_internship_licence.title'
                    ),
                    date_begin: new Date(2018, 6),
                    date_end: new Date(2018, 9),
                    summary: this.$t(
                        'experiences.enalean_internship_licence.summary'
                    ),
                    summary_technical: this.$t(
                        'experiences.enalean_internship_licence.summary_technical'
                    ),
                    languages: this.$t(
                        'experiences.enalean_internship_licence.languages'
                    ),
                    tools: this.$t(
                        'experiences.enalean_internship_licence.tools'
                    ),
                },
                {
                    left: false,
                    right: true,
                    localisation: this.$t(
                        'experiences.other_experiences.localisation'
                    ),
                    title: this.$t('experiences.other_experiences.title'),
                    summary: this.$t('experiences.other_experiences.summary'),
                    date_begin: new Date(2014, 9),
                    date_end: new Date(2015, 9),
                },
            ];
        }
    }

    export default ExperiencesDisplayer;
</script>
