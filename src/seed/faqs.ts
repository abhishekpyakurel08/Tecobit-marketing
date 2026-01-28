import type { Payload } from 'payload'

export async function seedFAQs(payload: Payload) {
    console.log('Seeding FAQs...')

    const faqs = [
        {
            question: 'What is Digital Marketing?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Digital marketing is the promotion of brands, products, or services through digital channels such as search engines, social media, email, and websites. It encompasses various strategies including SEO, content marketing, social media marketing, PPC advertising, and more.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'general',
            order: 1,
        },
        {
            question: 'What are Paid-Ads/PPC Services?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'PPC (Pay-Per-Click) advertising is a model where advertisers pay a fee each time their ad is clicked. This includes Google Ads, Facebook Ads, Instagram Ads, and other paid advertising platforms. It\'s an effective way to drive immediate traffic and leads to your business.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'services',
            order: 2,
        },
        {
            question: 'Where do Digital Marketers work?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Digital marketers work in various settings including marketing agencies, in-house marketing teams, startups, freelance positions, and remote work opportunities. At Digital Terai, our team works collaboratively to deliver exceptional results for our clients.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'general',
            order: 3,
        },
        {
            question: 'How much do your services cost?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Our pricing varies based on the scope of work, services required, and your business goals. We offer customized packages to fit different budgets. Contact us for a free consultation and quote tailored to your needs.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'pricing',
            order: 4,
        },
        {
            question: 'How long does it take to see results?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Results vary depending on the service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to see significant improvements. Social media marketing shows gradual growth over 2-3 months. We provide regular reports to track progress.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'process',
            order: 5,
        },
        {
            question: 'Do you work with businesses outside Nepal?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Yes! While we\'re based in Kathmandu, Nepal, we work with clients globally. Our digital marketing services can help businesses anywhere reach their target audience online.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'general',
            order: 6,
        },
        {
            question: 'What platforms do you manage for social media marketing?',
            answer: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'We manage all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, YouTube, and TikTok. We create platform-specific strategies to maximize your reach and engagement.',
                                },
                            ],
                        },
                    ],
                },
            },
            category: 'services',
            order: 7,
        },
    ]

    for (const faqData of faqs) {
        try {
            const existing = await payload.find({
                collection: 'faqs',
                where: {
                    question: {
                        equals: faqData.question,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'faqs',
                    data: faqData,
                })
                console.log(`✓ Created FAQ: ${faqData.question}`)
            } else {
                console.log(`- FAQ already exists: ${faqData.question}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create FAQ ${faqData.question}:`, error)
        }
    }
}
