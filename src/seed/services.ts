import type { Payload } from 'payload'

export async function seedServices(payload: Payload) {
    console.log('Seeding services...')

    const services = [
        {
            title: 'Social Media Marketing',
            slug: 'social-media-marketing',
            category: 'social-media',
            description: 'Full-service social media marketing to grow your brand and engage your audience across all platforms.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Tecobit Marketing is a full-service social media company based in Kathmandu, Nepal. We provide a full solution for your social marketing needs. Whether you want to craft brand awareness, or target new audience or grow your sales through social media, we can help you do that. We can create valuable content to post in your social profiles. We also provide a dedicated social media team to maintain your account on a real-time basis and ensure high-quality audience engagement and management.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Social Media Audit' },
                { feature: 'Audience & Competitor Research' },
                { feature: 'Strategy Development' },
                { feature: 'Content Development' },
                { feature: 'Social Media Advertising' },
                { feature: 'Management & Reporting' },
            ],
            process: [
                {
                    title: 'Social Media Audit',
                    description: 'We begin our service with a social media marketing audit of where you are, where your competition is.',
                },
                {
                    title: 'Audience & Competitor Research',
                    description: 'Following the audit, we discover more about your target audience, identify and research your closest competitors.',
                },
                {
                    title: 'Strategy Development',
                    description: 'Under social media channels to target your fans (present fans or influencers). Post-audit we align with your objectives.',
                },
                {
                    title: 'Content Development',
                    description: 'After creating the social media roadmap, we manage graphic design and video production to maintain consistent branding.',
                },
                {
                    title: 'Social Media Advertising',
                    description: 'Post-audit we customize ad campaigns with your unique social media strategy. We can make valuable posts even more valuable.',
                },
                {
                    title: 'Management & Reporting',
                    description: 'Our Management process includes monitoring your channels and engagement. We also provide monthly reports on our progress.',
                },
            ],
            featured: true,
            order: 1,
        },
        {
            title: 'Search Engine Optimization (SEO)',
            slug: 'seo',
            category: 'seo',
            description: 'Improve your website ranking and drive organic traffic with our comprehensive SEO services.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Our SEO services help businesses increase their online visibility and drive qualified traffic. We use proven strategies and white-hat techniques to improve your search engine rankings.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Keyword Research & Analysis' },
                { feature: 'On-Page SEO Optimization' },
                { feature: 'Technical SEO Audit' },
                { feature: 'Link Building' },
                { feature: 'Content Strategy' },
                { feature: 'Local SEO' },
            ],
            featured: true,
            order: 2,
        },
        {
            title: 'Content Writing',
            slug: 'content-writing',
            category: 'content-writing',
            description: 'Engaging, SEO-optimized content that resonates with your audience and drives results.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Our content writing services deliver high-quality, engaging content that speaks to your audience and achieves your business goals.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Blog Posts & Articles' },
                { feature: 'Website Copy' },
                { feature: 'Product Descriptions' },
                { feature: 'Email Newsletters' },
                { feature: 'Social Media Content' },
            ],
            featured: false,
            order: 3,
        },
        {
            title: 'Web Design & Development',
            slug: 'web-design',
            category: 'web-design',
            description: 'Beautiful, responsive websites that convert visitors into customers.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'We create stunning, user-friendly websites that represent your brand and drive business growth.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Custom Website Design' },
                { feature: 'Responsive Development' },
                { feature: 'E-commerce Solutions' },
                { feature: 'CMS Integration' },
                { feature: 'Website Maintenance' },
            ],
            featured: true,
            order: 4,
        },
        {
            title: 'Graphic Design',
            slug: 'graphic-design',
            category: 'graphic-design',
            description: 'Eye-catching designs that elevate your brand and communicate your message.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Our graphic design services bring your brand to life with creative, professional designs.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Logo Design' },
                { feature: 'Brand Identity' },
                { feature: 'Marketing Materials' },
                { feature: 'Social Media Graphics' },
                { feature: 'Infographics' },
            ],
            featured: false,
            order: 5,
        },
        {
            title: 'Branding',
            slug: 'branding',
            category: 'graphic-design',
            description: 'Comprehensive branding solutions to define your identity and resonate with your audience.',
            content: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'We help you build a cohesive and memorable brand identity from the ground up, ensuring consistent messaging across all touchpoints.',
                                },
                            ],
                        },
                    ],
                },
            },
            features: [
                { feature: 'Brand Strategy' },
                { feature: 'Logo & Identity Design' },
                { feature: 'Brand Guidelines' },
                { feature: 'Visual Language' },
                { feature: 'Rebranding' },
            ],
            featured: true,
            order: 6,
        },
    ]

    for (const serviceData of services) {
        try {
            const existing = await payload.find({
                collection: 'services',
                where: {
                    slug: {
                        equals: serviceData.slug,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'services',
                    data: serviceData,
                })
                console.log(`✓ Created service: ${serviceData.title}`)
            } else {
                console.log(`- Service already exists: ${serviceData.title}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create service ${serviceData.title}:`, error)
        }
    }
}
