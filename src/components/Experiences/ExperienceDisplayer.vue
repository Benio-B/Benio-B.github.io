<template>
    <div class="experience-container">
        <div class="experience-title-container">
            <div class="experience-title">{{ experience.title }}</div>
            <div class="experience-title-date">
                {{ date_begin }} - {{ date_end }}
            </div>
            <div class="experience-content" v-if="experience.enterprise">
                {{ experience.enterprise }} - {{ experience.localisation }}
            </div>
            <div class="experience-content" v-else>
                {{ experience.localisation }}
            </div>
        </div>
        <div class="experience-content" v-html="experience.summary"></div>
        <div class="experience-content">
            <div
                v-if="experience.summary_technical"
                v-html="experience.summary_technical"
            />
            <ul v-if="experience.summary_example_1">
                <li>
                    <div v-html="experience.summary_example_1" />
                </li>
                <li>
                    <div v-html="experience.summary_example_2" />
                </li>
                <li>
                    <div v-html="experience.summary_example_3" />
                </li>
            </ul>
        </div>
        <div
            class="experience-content"
            v-if="experience.summary_example_1"
            v-html="experience.example_title"
        />
        <ul v-if="experience.summary_example_1">
            <li>
                <div class="experience-content">
                    <div v-html="experience.example_1_title" />
                    <div v-html="experience.example_1_explanation" />
                    <i18n-t
                        tag="div"
                        v-bind:keypath="experience.example_1_link_begin"
                    >
                        <a
                            v-bind:href="experience.example_1_link"
                            target="_blank"
                            v-html="$t(experience.example_1_link_end)"
                        ></a>
                    </i18n-t>
                </div>
            </li>
            <li>
                <div class="experience-content">
                    <div v-html="experience.example_2_title" />
                    <div v-html="experience.example_2_explanation" />
                    <i18n-t
                        tag="div"
                        v-bind:keypath="experience.example_2_link_begin"
                    >
                        <a
                            v-bind:href="experience.example_2_link"
                            target="_blank"
                            v-html="$t(experience.example_2_link_end)"
                        ></a>
                    </i18n-t>
                </div>
            </li>
        </ul>
        <div
            class="experience-content"
            v-if="experience.languages"
            v-html="experience.languages"
        ></div>
        <div
            class="experience-content"
            v-if="experience.tools"
            v-html="experience.tools"
        ></div>
        <div
            class="experience-content"
            v-if="experience.source_code_link_begin"
        >
            <i18n-t
                tag="div"
                v-bind:keypath="experience.source_code_link_begin"
            >
                <a
                    v-bind:href="experience.source_code_link"
                    target="_blank"
                    v-html="$t(experience.source_code_link_end)"
                ></a>
            </i18n-t>
        </div>
    </div>
</template>

<script lang="ts">
    import type { IExperience } from '@/type';
    import { Vue } from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';

    export default class ExperienceDisplayer extends Vue {
        @Prop()
        readonly experience!: IExperience;

        get date_begin(): string {
            return this.convertDateToDisplay(this.experience.date_begin);
        }

        get date_end(): string {
            if (this.experience.date_end instanceof Date) {
                return this.convertDateToDisplay(this.experience.date_end);
            }
            return this.experience.date_end;
        }

        convertDateToDisplay(date: Date): string {
            const date_converted = this.$d(date, 'very_short');
            return (
                date_converted.charAt(0).toUpperCase() + date_converted.slice(1)
            );
        }
    }
</script>
