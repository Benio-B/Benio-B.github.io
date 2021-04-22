export interface Item {
    name: string;
    id: string;
    componentName: string;
    path: string;
}

export interface ItemIconLink {
    componentName: string;
    link: string;
    linkLabel: string;
}

export interface Experience {
    left: boolean;
    right: boolean;
    title: string;
    content_1: string;
    content_2?: string;
    content_2_link_begin?: string;
    content_2_link?: string;
    content_2_link_end?: string;
    content_3?: string;
    content_4?: string;
    date_begin: Date;
    date_end: Date | string;
    enterprise: string;
}
