export interface Media {
    url: string;
    alt: string;
}

export interface HeaderData {
    logo: Media | string | number;
    navItems: {
        label: string;
        link: string;
        icon?: string;
    }[];
    phoneNumber: string;
}

export interface FooterData {
    logo: Media | string | number;
    description: string;
    socialLinks: {
        platform: 'Facebook' | 'Twitter' | 'Instagram' | 'Linkedin';
        url: string;
    }[];
    sections: {
        title: string;
        links: {
            label: string;
            url: string;
        }[];
    }[];
    contactInfo: {
        email: string;
        phone: string;
        location: string;
    };
    copyrightText: string;
}
