export interface Item {
    name: string;
    id: string;
    classes: string;
    path: string;
}

export interface ItemIconLink {
    classes: string;
    link: string;
    link_label: string;
}

export type IExperience =
    | Experience
    | ExperienceDeveloper
    | ExperienceDeveloperWithLink
    | ExperienceComplete;

export interface Experience {
    left: boolean;
    right: boolean;
    title: string;
    summary: string;
    date_begin: Date;
    date_end: Date | string;
    localisation: string;
}

export interface ExperienceDeveloper extends Experience {
    summary_technical: string;
    languages: string;
    tools: string;
    enterprise: string;
}

export interface ExperienceDeveloperWithLink extends ExperienceDeveloper {
    source_code_link_begin: string;
    source_code_link: string;
    source_code_link_end: string;
}

export interface ExperienceComplete extends ExperienceDeveloperWithLink {
    summary_example_1: string;
    summary_example_2: string;
    summary_example_3: string;
    example_title: string;
    example_1_title: string;
    example_1_explanation: string;
    example_1_explanation_2?: string;
    example_1_link_begin?: string;
    example_1_link?: string;
    example_1_link_end?: string;
    example_2_title?: string;
    example_2_explanation?: string;
    example_2_link_begin?: string;
    example_2_link?: string;
    example_2_link_end?: string;
}
