import type { Payload } from 'payload'

export async function seedPages(payload: Payload, mediaId: string) {
    console.log('Seeding pages...')

    const existingHome = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: 'home',
            },
        },
    })

    if (existingHome.docs.length === 0) {
        await payload.create({
            collection: 'pages',
            data: {
                title: 'Home',
                slug: 'home',
                hero: {
                    titlePrefix: 'Let us Turn Your',
                    title: 'Business Into Brand',
                    description: 'Tecobit Marketing is a result driven Digital Marketing Agency in Nepal with a mission to help your business grow and compete in the digital age.',
                    backgroundImage: mediaId,
                    buttons: [
                        {
                            label: 'SEE OUR PORTFOLIO',
                            link: '#portfolio',
                            style: 'primary',
                        },
                        {
                            label: 'CONTACT US',
                            link: '/contact',
                            style: 'secondary',
                        },
                    ],
                },
            },
        })
        console.log('✓ Created home page')
    } else {
        console.log('- Home page already exists')
    }
}
