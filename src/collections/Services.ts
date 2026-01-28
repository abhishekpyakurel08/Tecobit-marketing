import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
    slug: 'services',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'featured', 'updatedAt'],
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
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'URL-friendly version of the title',
            },
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: [
                { label: 'Social Media Marketing', value: 'social-media' },
                { label: 'SEO', value: 'seo' },
                { label: 'Content Writing', value: 'content-writing' },
                { label: 'Web Design', value: 'web-design' },
                { label: 'Graphic Design', value: 'graphic-design' },
                { label: 'Digital Marketing', value: 'digital-marketing' },
                { label: 'PPC Services', value: 'ppc' },
            ],
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'heroImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'process',
            type: 'array',
            label: 'Service Process Steps',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'icon',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'pricing',
            type: 'group',
            fields: [
                {
                    name: 'startingPrice',
                    type: 'number',
                },
                {
                    name: 'currency',
                    type: 'text',
                    defaultValue: 'NPR',
                },
                {
                    name: 'pricingModel',
                    type: 'select',
                    options: [
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Hourly', value: 'hourly' },
                        { label: 'Monthly', value: 'monthly' },
                        { label: 'Custom', value: 'custom' },
                    ],
                },
            ],
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
                description: 'Display order on the website',
            },
        },
        {
            name: 'seo',
            type: 'group',
            label: 'SEO',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'text',
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                },
                {
                    name: 'keywords',
                    type: 'text',
                },
            ],
        },
    ],
}
