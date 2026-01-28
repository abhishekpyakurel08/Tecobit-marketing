import type { Payload } from 'payload'

export async function seedAiPrompts(payload: Payload) {
    console.log('Seeding AI prompts...')

    const prompts = [
        {
            title: 'Social Media Post Generator',
            category: 'social-media',
            promptType: 'dynamic',
            basePrompt: 'Create an engaging {{platform}} post about {{topic}} with a {{tone}} tone for {{audience}}. {{additionalInstructions}}',
            variables: [
                {
                    name: 'platform',
                    type: 'select',
                    options: [{ value: 'Facebook' }, { value: 'Instagram' }, { value: 'Twitter' }, { value: 'LinkedIn' }],
                    defaultValue: 'Instagram',
                },
                {
                    name: 'topic',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'tone',
                    type: 'select',
                    options: [{ value: 'Professional' }, { value: 'Casual' }, { value: 'Friendly' }, { value: 'Informative' }, { value: 'Humorous' }],
                    defaultValue: 'Friendly',
                },
                {
                    name: 'audience',
                    type: 'text',
                    defaultValue: 'general audience',
                },
                {
                    name: 'additionalInstructions',
                    type: 'text',
                    defaultValue: 'Include relevant hashtags and emojis.',
                },
            ],
            examples: [
                {
                    input: 'Platform: Instagram, Topic: Digital Marketing Tips, Tone: Informative',
                    output: '🚀 Want to boost your digital presence? Here are 5 game-changing tips:\n\n1️⃣ Know your audience\n2️⃣ Create valuable content\n3️⃣ Be consistent\n4️⃣ Engage authentically\n5️⃣ Track your metrics\n\n#DigitalMarketing #MarketingTips #GrowYourBusiness',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.8,
            maxTokens: 300,
            tags: [{ tag: 'social-media' }, { tag: 'content-creation' }],
        },
        {
            title: 'SEO Blog Post Generator',
            category: 'seo-content',
            promptType: 'dynamic',
            basePrompt: 'Write a comprehensive SEO-optimized blog post about {{topic}} targeting the keyword "{{keyword}}". The post should be {{wordCount}} words long with a {{tone}} tone. Include: \n- An engaging introduction\n- {{sections}} main sections with H2 headings\n- A conclusion with a call-to-action\n- Natural keyword placement',
            variables: [
                {
                    name: 'topic',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'keyword',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'wordCount',
                    type: 'number',
                    defaultValue: '1000',
                },
                {
                    name: 'tone',
                    type: 'select',
                    options: [{ value: 'Professional' }, { value: 'Conversational' }, { value: 'Educational' }, { value: 'Persuasive' }],
                    defaultValue: 'Professional',
                },
                {
                    name: 'sections',
                    type: 'number',
                    defaultValue: '5',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.7,
            maxTokens: 2000,
            tags: [{ tag: 'seo' }, { tag: 'blog' }, { tag: 'content-creation' }],
        },
        {
            title: 'Email Marketing Campaign',
            category: 'email-marketing',
            promptType: 'dynamic',
            basePrompt: 'Create a compelling email marketing campaign for {{businessType}} about {{subject}}. Target audience: {{audience}}. Campaign goal: {{goal}}. Include:\n- Subject line (max 50 characters)\n- Preview text\n- Email body with clear structure\n- Strong call-to-action',
            variables: [
                {
                    name: 'businessType',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'subject',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'audience',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'goal',
                    type: 'select',
                    options: [{ value: 'Generate Sales' }, { value: 'Build Awareness' }, { value: 'Nurture Leads' }, { value: 'Announce Launch' }],
                    defaultValue: 'Generate Sales',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.7,
            maxTokens: 500,
            tags: [{ tag: 'email' }, { tag: 'marketing' }, { tag: 'campaigns' }],
        },
        {
            title: 'Google Ads Copy Generator',
            category: 'ad-copy',
            promptType: 'dynamic',
            basePrompt: 'Create Google Ads copy for {{product}} targeting {{audience}}. Include:\n- 3 headlines (max 30 characters each)\n- 2 descriptions (max 90 characters each)\n- Focus on {{benefit}}\n- Include call-to-action: {{cta}}',
            variables: [
                {
                    name: 'product',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'audience',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'benefit',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'cta',
                    type: 'select',
                    options: [{ value: 'Buy Now' }, { value: 'Learn More' }, { value: 'Get Started' }, { value: 'Sign Up' }, { value: 'Contact Us' }],
                    defaultValue: 'Learn More',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.8,
            maxTokens: 300,
            tags: [{ tag: 'ppc' }, { tag: 'google-ads' }, { tag: 'advertising' }],
        },
        {
            title: 'Product Description Writer',
            category: 'product-descriptions',
            promptType: 'dynamic',
            basePrompt: 'Write a compelling product description for {{productName}}. \nCategory: {{category}}\nTarget audience: {{audience}}\nKey features: {{features}}\nPrice point: {{pricePoint}}\n\nCreate a description that highlights benefits, includes specifications, and encourages purchase.',
            variables: [
                {
                    name: 'productName',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'category',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'audience',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'features',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'pricePoint',
                    type: 'select',
                    options: [{ value: 'Budget' }, { value: 'Mid-range' }, { value: 'Premium' }, { value: 'Luxury' }],
                    defaultValue: 'Mid-range',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.7,
            maxTokens: 400,
            tags: [{ tag: 'ecommerce' }, { tag: 'product-description' }, { tag: 'copywriting' }],
        },
        {
            title: 'Instagram Reel Script',
            category: 'social-media',
            promptType: 'dynamic',
            basePrompt: 'Create a script for a {{duration}}-second Instagram Reel about {{topic}}. Style: {{style}}. Target audience: {{audience}}. Include:\n- Hook (first 3 seconds)\n- Main content with key points\n- Strong ending with CTA\n- Suggested music/sound',
            variables: [
                {
                    name: 'duration',
                    type: 'select',
                    options: [{ value: '15' }, { value: '30' }, { value: '60' }, { value: '90' }],
                    defaultValue: '30',
                },
                {
                    name: 'topic',
                    type: 'text',
                    defaultValue: '',
                },
                {
                    name: 'style',
                    type: 'select',
                    options: [{ value: 'Educational' }, { value: 'Entertainment' }, { value: 'Behind-the-scenes' }, { value: 'Tutorial' }],
                    defaultValue: 'Educational',
                },
                {
                    name: 'audience',
                    type: 'text',
                    defaultValue: '',
                },
            ],
            aiModel: 'gpt-4',
            temperature: 0.8,
            maxTokens: 400,
            tags: [{ tag: 'instagram' }, { tag: 'reels' }, { tag: 'video-content' }],
        },
    ]

    for (const promptData of prompts) {
        try {
            const existing = await payload.find({
                collection: 'ai-prompts',
                where: {
                    title: {
                        equals: promptData.title,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'ai-prompts',
                    data: promptData,
                })
                console.log(`✓ Created AI prompt: ${promptData.title}`)
            } else {
                console.log(`- AI prompt already exists: ${promptData.title}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create AI prompt ${promptData.title}:`, error)
        }
    }
}
