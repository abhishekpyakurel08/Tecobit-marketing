import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
    slug: 'header',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'navItems',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'link',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'icon',
                    type: 'text',
                    defaultValue: 'Briefcase',
                }
            ],
        },
        {
            name: 'phoneNumber',
            type: 'text',
            defaultValue: '+977-9863992047',
        }
    ],
}
