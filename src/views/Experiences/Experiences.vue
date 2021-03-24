<template>
    <div class="title-view">Experiences page. Empty</div>
    <experiences-displayer />
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import ExperiencesDisplayer from '@/components/Experiences/ExperiencesDisplayer.vue';

    @Options({ components: { ExperiencesDisplayer } })
    export default class Experiences extends Vue {}
</script>
