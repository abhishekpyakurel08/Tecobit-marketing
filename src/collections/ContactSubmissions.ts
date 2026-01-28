import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['businessName', 'email', 'service', 'status', 'createdAt'],
    },
    access: {
        read: ({ req: { user } }) => !!user,
        create: () => true, // Anyone can submit contact form
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => {
            if (!user) return false
            return user.role === 'admin'
        },
    },
    fields: [
        {
            name: 'businessName',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'service',
            type: 'text',
        },
        {
            name: 'subject',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Contacted', value: 'contacted' },
                { label: 'Closed', value: 'closed' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
