import { Payload } from 'payload'

export const seedHeader = async (payload: Payload, mediaId: string | number) => {
    console.log('  Seeding Header...')

    try {
        await payload.updateGlobal({
            slug: 'header',
            data: {
                logo: mediaId,
                navItems: [
                    { label: "Social Media", link: "/services/social-media-marketing", icon: "Users" },
                    { label: "SEO", link: "/services/seo", icon: "Search" },
                    { label: "Branding", link: "/services/branding", icon: "Globe" },
                    { label: "Development", link: "/services/web-design", icon: "Briefcase" },
                    { label: "About Us", link: "/about", icon: "Info" },
                    { label: "Contact Us", link: "/contact", icon: "Mail" },
                ],
                phoneNumber: "+977-9863992047"
            }
        })
    } catch (error) {
        console.error('Error seeding header:', error)
    }
}
