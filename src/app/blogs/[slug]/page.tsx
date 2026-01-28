import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { Navbar } from "@/components/Navbar"
import { SiteFooter } from "@/components/SiteFooter"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const payload = await getPayload({ config })

    const { docs: blogs } = await payload.find({
        collection: 'blogs',
        where: { slug: { equals: slug } }
    })

    if (!blogs[0]) return {}

    const blog = blogs[0]
    return {
        title: blog.title,
        description: blog.excerpt || blog.title,
    }
}

export default async function BlogDetailsPage({ params }: PageProps) {
    const { slug } = await params
    const payload = await getPayload({ config })

    const { docs: blogs } = await payload.find({
        collection: 'blogs',
        where: { slug: { equals: slug } }
    })

    const blog = blogs[0]
    if (!blog) notFound()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blogs" className="flex items-center space-x-2 text-muted-foreground hover:text-tecobit-mint transition-colors mb-12 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back to Blogs</span>
                    </Link>

                    <header className="space-y-8 mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight tracking-tighter">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-bold uppercase tracking-widest border-y border-border py-6">
                            <div className="flex items-center space-x-2">
                                <Calendar size={18} className="text-tecobit-mint" />
                                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User size={18} className="text-tecobit-mint" />
                                <span>{typeof blog.author === 'object' ? (blog.author as any).name : 'Tecobit Team'}</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-xl dark:prose-invert max-w-none">
                        {/* Lexical rendering would happen here */}
                        <div className="text-lg leading-relaxed opacity-90 space-y-6">
                            <p>{blog.excerpt}</p>
                            <div className="h-px bg-border w-1/4 my-10"></div>
                            <p>Welcome to Tecobit Marketing insights. This article explores the latest trends in digital growth and strategy for businesses in 2026. Stay tuned for more expert analysis.</p>
                        </div>
                    </div>
                </div>
            </article>

            <SiteFooter />
        </div>
    )
}
