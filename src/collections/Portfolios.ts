import type { CollectionConfig } from 'payload'

export const Portfolios: CollectionConfig = {
    slug: 'portfolios',
    admin: {
        useAsTitle: 'clientName',
        defaultColumns: ['clientName', 'category', 'featured', 'createdAt'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => {
            if (!user) return false
            return user.role === 'admin'
        },
    },
    fields: [
        {
            name: 'clientName',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            hasMany: true,
            options: [
                { label: 'Social Media Marketing', value: 'social-media' },
                { label: 'SEO', value: 'seo' },
                { label: 'Web Design', value: 'web-design' },
                { label: 'Branding', value: 'branding' },
                { label: 'E-commerce', value: 'ecommerce' },
            ],
        },
        {
            name: 'industry',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'challenge',
            type: 'richText',
        },
        {
            name: 'solution',
            type: 'richText',
        },
        {
            name: 'results',
            type: 'richText',
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'metrics',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'websiteUrl',
            type: 'text',
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'order',
            type: 'number',
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
