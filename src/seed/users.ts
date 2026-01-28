import type { Payload } from 'payload'

export async function seedUsers(payload: Payload) {
    console.log('Seeding users...')

    const users = [
        {
            email: process.env.ADMIN_EMAIL || 'admin@digitalterai.com',
            password: process.env.ADMIN_PASSWORD || 'admin123456',
            role: 'admin',
            firstName: 'Admin',
            lastName: 'User',
        },
        {
            email: 'editor@digitalterai.com',
            password: 'editor123456',
            role: 'editor',
            firstName: 'Editor',
            lastName: 'User',
        },
    ]

    for (const userData of users) {
        try {
            const existing = await payload.find({
                collection: 'users',
                where: {
                    email: {
                        equals: userData.email,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'users',
                    data: userData,
                })
                console.log(`✓ Created user: ${userData.email}`)
            } else {
                console.log(`- User already exists: ${userData.email}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create user ${userData.email}:`, error)
        }
    }
}
