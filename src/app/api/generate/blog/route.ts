import { NextRequest, NextResponse } from 'next/server'
import { generateBlogContent } from '@/lib/promptGenerator'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { topic, keywords, tone, wordCount } = body

        if (!topic || !keywords || !tone) {
            return NextResponse.json(
                { error: 'Missing required parameters: topic, keywords, tone' },
                { status: 400 }
            )
        }

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                { error: 'OpenAI API key not configured' },
                { status: 500 }
            )
        }

        const result = await generateBlogContent({
            topic,
            keywords: Array.isArray(keywords) ? keywords : [keywords],
            tone,
            wordCount: wordCount || 1000,
        })

        return NextResponse.json({ result })
    } catch (error) {
        console.error('Error generating blog content:', error)
        return NextResponse.json(
            { error: 'Failed to generate blog content' },
            { status: 500 }
        )
    }
}
