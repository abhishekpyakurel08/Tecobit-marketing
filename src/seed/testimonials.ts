import type { Payload } from 'payload'

export async function seedTestimonials(payload: Payload) {
    console.log('Seeding testimonials...')

    const testimonials = [
        {
            clientName: 'Rajesh Sharma',
            company: 'ANOVA Hospital',
            position: 'Marketing Director',
            testimonial: 'Digital Terai transformed our online presence completely. Their social media strategies helped us reach thousands of potential patients and build trust in our healthcare services.',
            rating: 5,
            featured: true,
            order: 1,
        },
        {
            clientName: 'Sunita Thapa',
            company: 'TripFinn Hotel',
            position: 'General Manager',
            testimonial: 'Working with Digital Terai was a game-changer for our hotel. Our online bookings increased by 165% in just 6 months!',
            rating: 5,
            featured: true,
            order: 2,
        },
        {
            clientName: 'Anil Karki',
            company: 'Tansen Cement',
            position: 'CEO',
            testimonial: 'The team at Digital Terai understands B2B marketing. They helped us modernize our brand and reach our target customers effectively.',
            rating: 5,
            featured: true,
            order: 3,
        },
        {
            clientName: 'Priya Maharjan',
            company: 'Nepal Fashion Store',
            position: 'Owner',
            testimonial: 'Their e-commerce expertise and digital marketing strategies helped us grow our online sales by 200%. Highly recommended!',
            rating: 5,
            featured: false,
            order: 4,
        },
    ]

    for (const testimonialData of testimonials) {
        try {
            const existing = await payload.find({
                collection: 'testimonials',
                where: {
                    clientName: {
                        equals: testimonialData.clientName,
                    },
                    company: {
                        equals: testimonialData.company,
                    },
                },
            })

            if (existing.docs.length === 0) {
                await payload.create({
                    collection: 'testimonials',
                    data: testimonialData,
                })
                console.log(`✓ Created testimonial: ${testimonialData.clientName} - ${testimonialData.company}`)
            } else {
                console.log(`- Testimonial already exists: ${testimonialData.clientName}`)
            }
        } catch (error) {
            console.error(`✗ Failed to create testimonial ${testimonialData.clientName}:`, error)
        }
    }
}
