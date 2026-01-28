import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Portfolios } from './collections/Portfolios'
import { Blogs } from './collections/Blogs'
import { Testimonials } from './collections/Testimonials'
import { FAQs } from './collections/FAQs'
import { AiPrompts } from './collections/AiPrompts'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Pages } from './collections/Pages'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- Tecobit Marketing CMS',
        },
    },
    collections: [
        Users,
        Media,
        Services,
        Portfolios,
        Blogs,
        Testimonials,
        FAQs,
        AiPrompts,
        ContactSubmissions,
        Pages,
    ],
    globals: [
        Header,
        Footer,
    ],
    editor: lexicalEditor({}),
    secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/tecobit-marketing',
    }),
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    cors: [
        process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    ].filter(Boolean),
    sharp,
})
