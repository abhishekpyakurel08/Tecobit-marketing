import { NextRequest, NextResponse } from 'next/server'
import { generateSocialMedia } from '@/lib/promptGenerator'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { platform, topic, tone, includeHashtags, includeEmojis } = body

        if (!platform || !topic || !tone) {
            return NextResponse.json(
                { error: 'Missing required parameters: platform, topic, tone' },
                { status: 400 }
            )
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'OpenAI API key not configured' },
                { status: 500 }
            )
        }

        const result = await generateSocialMedia({
            platform,
            topic,
            tone,
            includeHashtags: includeHashtags ?? true,
            includeEmojis: includeEmojis ?? true,
        })

        return NextResponse.json({ result })
    } catch (error) {
        console.error('Error generating social media content:', error)
        return NextResponse.json(
            { error: 'Failed to generate social media content' },
            { status: 500 }
        )
    }
}
