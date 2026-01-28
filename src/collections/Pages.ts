import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'select',
            options: [
                { label: 'Home', value: 'home' },
                { label: 'About', value: 'about' },
                { label: 'Contact', value: 'contact' },
            ],
            defaultValue: 'home',
            unique: true,
            required: true,
        },
        {
            name: 'hero',
            type: 'group',
            fields: [
                {
                    name: 'titlePrefix',
                    type: 'text',
                },
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'backgroundImage',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'buttons',
                    type: 'array',
                    fields: [
                        {
                            name: 'label',
                            type: 'text',
                        },
                        {
                            name: 'link',
                            type: 'text',
                        },
                        {
                            name: 'style',
                            type: 'select',
                            options: [
                                { label: 'Primary', value: 'primary' },
                                { label: 'Secondary', value: 'secondary' },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'content',
            type: 'blocks',
            blocks: [
                {
                    slug: 'featureGrid',
                    fields: [
                        {
                            name: 'features',
                            type: 'array',
                            fields: [
                                { name: 'title', type: 'text', required: true },
                                { name: 'description', type: 'textarea', required: true },
                                { name: 'image', type: 'upload', relationTo: 'media' },
                                { name: 'reverse', type: 'checkbox' },
                            ]
                        }
                    ]
                },
                {
                    slug: 'processSection',
                    fields: [
                        { name: 'title', type: 'text', required: true },
                        {
                            name: 'steps',
                            type: 'array',
                            fields: [
                                { name: 'title', type: 'text', required: true },
                                { name: 'description', type: 'textarea' },
                                { name: 'icon', type: 'select', options: ['search', 'user', 'target', 'pen', 'layers', 'chart'] }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}
