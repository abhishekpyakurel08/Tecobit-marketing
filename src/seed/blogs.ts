import type { Payload } from 'payload'

export async function seedBlogs(payload: Payload) {
    console.log('Seeding blogs...')

    // Get the first admin user as author
    const users = await payload.find({
        collection: 'users',
        where: {
            role: {
                equals: 'admin',
            },
        },
        limit: 1,
    })

    if (users.docs.length === 0) {
        console.log('⚠️ No admin user found for blog author, skipping blogs')
        return
    }

    const authorId = users.docs[0].id

    const blogs = [
        {
            title: 'Top 10 Digital Marketing Strategies for 2026',
            slug: 'top-10-digital-marketing-strategies-2026',
            excerpt: 'Discover the most effective digital marketing strategies to grow your business in 2026.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'heading',
                            tag: 'h2',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Introduction',
                                },
                            ],
                        },
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'The digital marketing landscape is constantly evolving. In 2026, businesses need to stay ahead of the curve with innovative strategies that deliver results.',
                                },
                            ],
                        },
                    ],
                },
            },
            author: authorId,
            category: ['digital-marketing'],
            tags: [{ tag: 'strategy' }, { tag: 'marketing' }, { tag: 'trends' }],
            status: 'published',
            publishedAt: new Date('2026-01-15'),
            readTime: 8,
        },
        {
            title: 'How to Increase Your Website Traffic with SEO',
            slug: 'increase-website-traffic-seo',
            excerpt: 'Learn proven SEO techniques to boost your organic traffic and rankings.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'SEO is one of the most effective ways to drive sustainable traffic to your website. Here are the key strategies you need to implement.',
                                },
                            ],
                        },
                    ],
                },
            },
            author: authorId,
            category: ['seo'],
            tags: [{ tag: 'seo' }, { tag: 'traffic' }, { tag: 'optimization' }],
            status: 'published',
            publishedAt: new Date('2026-01-10'),
            readTime: 6,
        },
        {
            title: 'Social Media Marketing Best Practices',
            slug: 'social-media-marketing-best-practices',
            excerpt: 'Master social media marketing with these essential tips and strategies.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Social media is a powerful tool for businesses to connect with their audience. Follow these best practices to maximize your social media impact.',
                                },
                            ],
                        },
                    ],
                },
            },
            author: authorId,
            category: ['social-media'],
            tags: [{ tag: 'social-media' }, { tag: 'marketing' }, { tag: 'engagement' }],
            status: 'published',
            publishedAt: new Date('2026-01-05'),
            readTime: 5,
        },
    ]

    for (const blogData of blogs) {
        try {
            const existing = await payload.find({
                collection: 'blogs',
                where: {
                    slug: {
                        equals: blogData.slug,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'blogs',
                    data: blogData,
                })
                console.log(`✓ Created blog: ${blogData.title}`)
            } else {
                console.log(`- Blog already exists: ${blogData.title}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create blog ${blogData.title}:`, error)
        }
    }
}
