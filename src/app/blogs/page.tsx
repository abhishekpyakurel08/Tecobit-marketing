import { getPayload } from 'payload'
import config from '@/payload.config'
import { Navbar } from "@/components/Navbar"
import { SiteFooter } from "@/components/SiteFooter"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
    title: 'Digital Marketing Blog | Insights & Trends',
    description: 'Stay updated with the latest trends in SEO, Social Media, and Web Development with Tecobit Marketing.',
}

export default async function BlogsPage() {
    const payload = await getPayload({ config })

    const { docs: blogs } = await payload.find({
        collection: 'blogs',
        sort: '-createdAt',
    })

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <header className="pt-32 pb-20 bg-muted/5 border-b border-border">
                <div className="container mx-auto px-6">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tighter uppercase mb-6">Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">Expert perspectives on the future of digital marketing and technology in Nepal.</p>
                </div>
            </header>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogs.map((blog: any) => (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.slug}`}
                                className="group space-y-6"
                            >
                                <div className="aspect-[16/10] bg-muted/20 border border-border rounded-3xl overflow-hidden relative">
                                    {blog.featuredImage && (
                                        <img
                                            src={typeof blog.featuredImage === 'object' ? (blog.featuredImage as any).url : blog.featuredImage}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    )}
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-tecobit-mint text-black font-bold text-xs uppercase tracking-widest rounded-full">
                                        {blog.category || 'Industry'}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold group-hover:text-tecobit-mint transition-colors tracking-tight leading-tight">
                                        {blog.title}
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                    <div className="flex items-center space-x-2 text-tecobit-mint font-bold text-xs uppercase tracking-widest pt-2">
                                        <span>Read Article</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    )
}
