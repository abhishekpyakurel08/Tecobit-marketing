import { Payload } from 'payload'

export const seedFooter = async (payload: Payload, mediaId: string | number) => {
    console.log('  Seeding Footer...')

    try {
        await payload.updateGlobal({
            slug: 'footer',
            data: {
                logo: mediaId,
                description: "Empowering Nepalese businesses with cutting-edge digital marketing strategies and world-class technology solutions.",
                socialLinks: [
                    { platform: "Facebook", url: "https://facebook.com/tecobit" },
                    { platform: "Twitter", url: "https://twitter.com/tecobit" },
                    { platform: "Instagram", url: "https://instagram.com/tecobit" },
                    { platform: "Linkedin", url: "https://linkedin.com/company/tecobit" },
                ],
                sections: [
                    {
                        title: "Services",
                        links: [
                            { label: "SEO Optimization", url: "/services/seo" },
                            { label: "Social Media", url: "/services/social-media-marketing" },
                            { label: "Web Development", url: "/services/web-design" },
                            { label: "Branding", url: "/services/branding" },
                        ]
                    },
                    {
                        title: "Company",
                        links: [
                            { label: "About Us", url: "/about" },
                            { label: "Our Team", url: "/team" },
                            { label: "Careers", url: "/careers" },
                            { label: "Contact", url: "/contact" },
                        ]
                    }
                ],
                contactInfo: {
                    email: "info@tecobit.com",
                    phone: "+977 9863992047",
                    location: "Kathmandu, Nepal"
                },
                copyrightText: "© 2026 Tecobit Marketing. All rights reserved."
            }
        })
    } catch (error) {
        console.error('Error seeding footer:', error)
    }
}
