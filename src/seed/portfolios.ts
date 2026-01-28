import type { Payload } from 'payload'

export async function seedPortfolios(payload: Payload, mediaId: string | number) {
    console.log('Seeding portfolios...')

    const portfolios = [
        {
            clientName: 'ANOVA Hospital',
            slug: 'anova-hospital',
            category: ['social-media', 'web-design'],
            industry: 'Healthcare',
            description: 'Complete digital marketing solution for leading healthcare provider',
            logo: mediaId,
            images: [{ image: mediaId }],
            challenge: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'ANOVA Hospital needed to increase patient engagement and build trust in their healthcare services through digital channels.',
                                },
                            ],
                        },
                    ],
                },
            },
            solution: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'We developed a comprehensive social media strategy, redesigned their website, and created engaging content to showcase their expertise.',
                                },
                            ],
                        },
                    ],
                },
            },
            results: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Achieved 150% increase in patient inquiries and 200% growth in social media engagement within 6 months.',
                                },
                            ],
                        },
                    ],
                },
            },
            metrics: [
                { label: 'Patient Inquiries', value: '+150%' },
                { label: 'Social Media Growth', value: '+200%' },
                { label: 'Website Traffic', value: '+180%' },
            ],
            featured: true,
            order: 1,
        },
        {
            clientName: 'Tansen Cement',
            slug: 'tansen-cement',
            category: ['social-media', 'branding'],
            industry: 'Manufacturing',
            description: 'Brand positioning and digital presence for leading cement manufacturer',
            logo: mediaId,
            images: [{ image: mediaId }],
            challenge: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Tansen Cement wanted to modernize their brand image and reach B2B customers through digital channels.',
                                },
                            ],
                        },
                    ],
                },
            },
            solution: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Created a strong brand identity, developed targeted B2B content, and implemented LinkedIn marketing campaigns.',
                                },
                            ],
                        },
                    ],
                },
            },
            metrics: [
                { label: 'Brand Awareness', value: '+120%' },
                { label: 'B2B Leads', value: '+90%' },
            ],
            featured: true,
            order: 2,
        },
        {
            clientName: 'Better Cement',
            slug: 'better-cement',
            category: ['branding', 'social-media'],
            industry: 'Manufacturing',
            description: 'Complete rebranding and digital marketing strategy',
            logo: mediaId,
            images: [{ image: mediaId }],
            featured: true,
            order: 3,
        },
        {
            clientName: 'TripFinn Hotel Chitwan',
            slug: 'tripfinn-hotel',
            category: ['social-media', 'web-design'],
            industry: 'Hospitality',
            description: 'Digital marketing and booking optimization for boutique hotel',
            logo: mediaId,
            images: [{ image: mediaId }],
            metrics: [
                { label: 'Online Bookings', value: '+165%' },
                { label: 'Social Engagement', value: '+210%' },
            ],
            featured: true,
            order: 4,
        },
    ]

    for (const portfolioData of portfolios) {
        try {
            const existing = await payload.find({
                collection: 'portfolios',
                where: {
                    slug: {
                        equals: portfolioData.slug,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'portfolios',
                    data: portfolioData,
                })
                console.log(`✓ Created portfolio: ${portfolioData.clientName}`)
            } else {
                console.log(`- Portfolio already exists: ${portfolioData.clientName}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create portfolio ${portfolioData.clientName}:`, error)
        }
    }
}
