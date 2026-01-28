import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename',
        defaultColumns: ['filename', 'alt', 'mimeType', 'createdAt'],
    },
    upload: {
        staticDir: 'public/media',
        mimeTypes: ['image/*', 'application/pdf'],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 512,
                position: 'centre',
            },
            {
                name: 'hero',
                width: 1920,
                height: 1080,
                position: 'centre',
            },
        ],
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
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
        },
    ],
}
