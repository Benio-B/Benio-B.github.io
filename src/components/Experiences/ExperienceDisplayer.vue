<template>
    <div class="experience-container">
        <div class="experience-title-container">
            <div class="experience-title">{{ experience.title }}</div>
            <div class="experience-title-date">
                {{ date_begin }} - {{ date_end }}
            </div>
        </div>
        <div class="experience-content" v-html="experience.content_1"></div>
        <div class="experience-content">
            <div v-html="experience.content_2" />
            <i18n-t v-bind:keypath="experience.content_2_link_begin" tag="div">
                <a
                    :href="experience.content_2_link"
                    target="_blank"
                    v-html="$t(experience.content_2_link_end)"
                ></a>
            </i18n-t>
        </div>
        <div class="experience-content" v-html="experience.content_3"></div>
        <div class="experience-content" v-html="experience.content_4"></div>
    </div>
</template>

<script lang="ts">
    import { Experience } from '@/type';
    import { Vue } from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';

    export default class ExperienceDisplayer extends Vue {
        @Prop()
        readonly experience!: Experience;

        get date_begin(): string {
            const date = this.$d(this.experience.date_begin, 'very_short');
            return date.charAt(0).toUpperCase() + date.slice(1);
        }

        get date_end(): string {
            this.experience.content_2_link_end;
            if (this.experience.date_end instanceof Date) {
                const date = this.$d(this.experience.date_end, 'very_short');
                return date.charAt(0).toUpperCase() + date.slice(1);
            }
            return this.experience.date_end;
        }
    }
</script>
