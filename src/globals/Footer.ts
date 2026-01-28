import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
    slug: 'footer',
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
            name: 'description',
            type: 'textarea',
            required: true,
            defaultValue: 'Empowering Nepalese businesses with cutting-edge digital marketing strategies.'
        },
        {
            name: 'socialLinks',
            type: 'array',
            fields: [
                {
                    name: 'platform',
                    type: 'select',
                    options: ['Facebook', 'Twitter', 'Instagram', 'Linkedin'],
                    required: true,
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true,
                }
            ]
        },
        {
            name: 'sections',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'links',
                    type: 'array',
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'url',
                            type: 'text',
                            required: true,
                        }
                    ]
                }
            ]
        },
        {
            name: 'contactInfo',
            type: 'group',
            fields: [
                {
                    name: 'email',
                    type: 'text',
                    defaultValue: 'info@tecobit.com',
                },
                {
                    name: 'phone',
                    type: 'text',
                    defaultValue: '+977 9863992047',
                },
                {
                    name: 'location',
                    type: 'text',
                    defaultValue: 'Kathmandu, Nepal',
                }
            ]
        },
        {
            name: 'copyrightText',
            type: 'text',
            defaultValue: 'Tecobit Marketing. All rights reserved.',
        }
    ],
}
