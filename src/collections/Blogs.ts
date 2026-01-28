import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'author', 'status', 'publishedAt'],
    },
    versions: {
        drafts: true,
    },
    access: {
        read: ({ req: { user } }) => {
            if (user) return true
            return {
                status: {
                    equals: 'published',
                },
            }
        },
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
                position: 'sidebar',
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'category',
            type: 'select',
            hasMany: true,
            options: [
                { label: 'Digital Marketing', value: 'digital-marketing' },
                { label: 'SEO', value: 'seo' },
                { label: 'Social Media', value: 'social-media' },
                { label: 'Web Design', value: 'web-design' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'tags',
            type: 'array',
            fields: [
                {
                    name: 'tag',
                    type: 'text',
                },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'readTime',
            type: 'number',
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
