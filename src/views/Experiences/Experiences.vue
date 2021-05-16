<template>
    <h1>
        <div class="home-presentation-title-container">
            {{ $t('experiences.title') }}
        </div>
    </h1>
    <experiences-displayer />
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import ExperiencesDisplayer from '@/components/Experiences/ExperiencesDisplayer.vue';

    @Options({ components: { ExperiencesDisplayer } })
    export default class Experiences extends Vue {}
</script>
