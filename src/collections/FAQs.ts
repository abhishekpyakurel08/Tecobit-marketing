import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
    slug: 'faqs',
    admin: {
        useAsTitle: 'question',
        defaultColumns: ['question', 'category', 'order'],
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
            name: 'question',
            type: 'text',
            required: true,
        },
        {
            name: 'answer',
            type: 'richText',
            required: true,
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            options: [
                { label: 'General', value: 'general' },
                { label: 'Services', value: 'services' },
                { label: 'Pricing', value: 'pricing' },
                { label: 'Process', value: 'process' },
                { label: 'Technical', value: 'technical' },
            ],
        },
        {
            name: 'order',
            type: 'number',
            required: true,
            defaultValue: 0,
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
