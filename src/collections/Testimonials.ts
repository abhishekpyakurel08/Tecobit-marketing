import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'clientName',
        defaultColumns: ['clientName', 'company', 'rating', 'featured'],
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
            name: 'company',
            type: 'text',
            required: true,
        },
        {
            name: 'position',
            type: 'text',
            required: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'testimonial',
            type: 'textarea',
            required: true,
        },
        {
            name: 'rating',
            type: 'number',
            required: true,
            min: 1,
            max: 5,
        },
        {
            name: 'service',
            type: 'relationship',
            relationTo: 'services',
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
