import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'
import { seedMedia } from './media'
import { seedUsers } from './users'
import { seedServices } from './services'
import { seedPortfolios } from './portfolios'
import { seedBlogs } from './blogs'
import { seedTestimonials } from './testimonials'
import { seedFAQs } from './faqs'
import { seedAiPrompts } from './aiPrompts'
import { seedPages } from './pages'
import { seedHeader } from './header'
import { seedFooter } from './footer'

async function seed() {
    console.log('🌱 Starting database seed...')

    try {
        const payload = await getPayload({ config })

        console.log('Connected to Payload CMS')

        // Seed in order to respect relationships
        await seedUsers(payload)
        const mediaId = await seedMedia(payload)
        await seedServices(payload)
        await seedPortfolios(payload, mediaId)
        await seedBlogs(payload)
        await seedTestimonials(payload)
        await seedFAQs(payload)
        await seedAiPrompts(payload)
        await seedPages(payload, String(mediaId))
        await seedHeader(payload, mediaId)
        await seedFooter(payload, mediaId)

        console.log('✅ Seed completed successfully!')
        process.exit(0)
    } catch (error) {
        console.error('❌ Seed failed:', error)
        process.exit(1)
    }
}

seed()
