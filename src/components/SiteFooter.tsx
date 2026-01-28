import { FooterData } from "@/types/globals";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SiteFooterProps {
    data?: FooterData;
}

const socialIconMap: Record<string, any> = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    Linkedin: Linkedin
};

export function SiteFooter({ data }: SiteFooterProps) {
    const logoUrl = typeof data?.logo === 'object' && data.logo !== null ? (data.logo as any).url : '/logo.png';

    return (
        <footer className="bg-background/90 backdrop-blur-xl text-foreground pt-24 pb-12 border-t border-border transition-colors duration-300 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-4 group">
                            <div className="relative h-20 w-20">
                                <Image
                                    src={logoUrl}
                                    alt="Tecobit Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black tracking-tighter text-foreground leading-none">TECOBIT</span>
                                <span className="text-xs font-bold tracking-[0.4em] text-tecobit-mint uppercase mt-1">Marketing</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            {data?.description || "Empowering Nepalese businesses with cutting-edge digital marketing strategies. We turn your vision into value through data-driven results since 2013."}
                        </p>
                        <div className="flex space-x-4">
                            {data?.socialLinks?.map((social, index) => {
                                const Icon = socialIconMap[social.platform] || Globe;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="w-10 h-10 bg-white/5 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-tecobit-mint hover:text-black transition-all"
                                    >
                                        <Icon size={20} />
                                    </a>
                                )
                            }) || (
                                    <>
                                        <a href="#" className="w-10 h-10 bg-white/5 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-tecobit-mint hover:text-black transition-all"><Facebook size={20} /></a>
                                        <a href="#" className="w-10 h-10 bg-white/5 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-tecobit-mint hover:text-black transition-all"><Twitter size={20} /></a>
                                        <a href="#" className="w-10 h-10 bg-white/5 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-tecobit-mint hover:text-black transition-all"><Instagram size={20} /></a>
                                        <a href="#" className="w-10 h-10 bg-white/5 border border-border rounded-full flex items-center justify-center text-foreground hover:bg-tecobit-mint hover:text-black transition-all"><Linkedin size={20} /></a>
                                    </>
                                )}
                        </div>
                    </div>

                    {/* Dynamic Sections */}
                    {data?.sections?.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="font-black text-xl mb-8 uppercase tracking-widest text-tecobit-mint">{section.title}</h3>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link href={link.url} className="hover:text-tecobit-mint transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )) || (
                            <>
                                {/* Static Fallback Services */}
                                <div>
                                    <h3 className="font-black text-xl mb-8 uppercase tracking-widest text-tecobit-mint">Services</h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        <li><Link href="/services/seo" className="hover:text-tecobit-mint transition-colors">SEO Optimization</Link></li>
                                        <li><Link href="/services/social-media-marketing" className="hover:text-tecobit-mint transition-colors">Social Media Marketing</Link></li>
                                        <li><Link href="/services/web-design" className="hover:text-tecobit-mint transition-colors">Web Development</Link></li>
                                    </ul>
                                </div>

                                {/* Static Fallback Company */}
                                <div>
                                    <h3 className="font-black text-xl mb-8 uppercase tracking-widest text-tecobit-mint">Company</h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        <li><Link href="/about" className="hover:text-tecobit-mint transition-colors">About Us</Link></li>
                                        <li><Link href="/contact" className="hover:text-tecobit-mint transition-colors">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </>
                        )}

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="font-black text-xl mb-8 uppercase tracking-widest text-tecobit-mint">Contact</h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-3">
                                <Mail size={18} className="text-tecobit-mint" />
                                <a href={`mailto:${data?.contactInfo?.email || 'info@tecobit.com'}`}>{data?.contactInfo?.email || 'info@tecobit.com'}</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={18} className="text-tecobit-mint" />
                                <a href={`tel:${data?.contactInfo?.phone || '+977 9863992047'}`}>{data?.contactInfo?.phone || '+977 9863992047'}</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin size={18} className="text-tecobit-mint" />
                                <span>{data?.contactInfo?.location || 'Kathmandu, Nepal'}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>{data?.copyrightText || `© ${new Date().getFullYear()} Tecobit Marketing. All rights reserved.`}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-tecobit-mint transition-colors">Cookie Policy</Link>
                        <Link href="#" className="hover:text-tecobit-mint transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
