import type { Payload } from 'payload'
import path from 'path'
import fs from 'fs/promises'

export async function seedMedia(payload: Payload) {
    console.log('Seeding media...')
    const existing = await payload.find({
        collection: 'media',
        where: {
            filename: {
                equals: 'logo.png'
            }
        }
    })

    if (existing.docs.length > 0) {
        return existing.docs[0].id
    }

    // Read the logo file
    const filePath = path.join(process.cwd(), 'public/logo.png')
    const buffer = await fs.readFile(filePath)

    const media = await payload.create({
        collection: 'media',
        data: {
            alt: 'Tecobit Logo',
        },
        file: {
            data: buffer,
            mimetype: 'image/png',
            name: 'logo.png',
            size: buffer.length,
        },
    })

    console.log('✓ Created logo media')
    return media.id
}
