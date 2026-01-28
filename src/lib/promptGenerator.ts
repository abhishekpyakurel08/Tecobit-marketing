import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

interface BlogContentProps {
    topic: string
    keywords: string[]
    tone: string
    wordCount: number
}

interface SocialMediaProps {
    platform: string
    topic: string
    tone: string
    includeHashtags: boolean
    includeEmojis: boolean
}

export async function generateBlogContent({ topic, keywords, tone, wordCount }: BlogContentProps) {
    const prompt = `Write a comprehensive SEO-optimized blog post about ${topic} targeting the keywords: ${keywords.join(', ')}. 
The post should be approximately ${wordCount} words long with a ${tone} tone.
Include:
- An engaging introduction
- Main sections with H2 headings
- A conclusion
- Natural keyword placement`

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { role: 'system', content: 'You are an expert SEO content writer.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.7,
    })

    return response.choices[0].message.content
}

export async function generateSocialMedia({
    platform,
    topic,
    tone,
    includeHashtags,
    includeEmojis,
}: SocialMediaProps) {
    const prompt = `Create an engaging ${platform} post about ${topic} with a ${tone} tone.
${includeHashtags ? 'Include relevant hashtags.' : 'Do not include hashtags.'}
${includeEmojis ? 'Include relevant emojis.' : 'Do not include emojis.'}`

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            { role: 'system', content: 'You are a social media marketing expert.' },
            { role: 'user', content: prompt },
        ],
        temperature: 0.8,
    })

    return response.choices[0].message.content
}
