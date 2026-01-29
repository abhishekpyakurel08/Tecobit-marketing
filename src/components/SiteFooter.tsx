"use client";
import { FooterData } from "@/types/globals";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe, ArrowRight, Clock } from "lucide-react";
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
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-background text-foreground pt-24 pb-12 border-t border-border relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="section-container relative z-10 !py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative h-24 md:h-32 lg:h-36 w-auto flex items-center justify-start">
                                <img
                                    src="/tecobit-logo.png?v=4"
                                    alt="Tecobit Technology"
                                    className="h-full w-auto object-contain dark:brightness-110"
                                />
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            {data?.description || "Empowering businesses with cutting-edge digital marketing strategies. We turn your vision into value through data-driven results."}
                        </p>
                        <div className="flex space-x-3">
                            {data?.socialLinks?.map((social, index) => {
                                const Icon = socialIconMap[social.platform] || Globe;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="w-10 h-10 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            }) || (
                                    <>
                                        <a href="#" className="w-10 h-10 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300"><Facebook size={18} /></a>
                                        <a href="#" className="w-10 h-10 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300"><Twitter size={18} /></a>
                                        <a href="#" className="w-10 h-10 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300"><Instagram size={18} /></a>
                                        <a href="#" className="w-10 h-10 bg-transparent border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300"><Linkedin size={18} /></a>
                                    </>
                                )}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-foreground">Company</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> News & Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-foreground">Services</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/services/seo" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Search Engine Optimization</Link></li>
                            <li><Link href="/services/social" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Social Media Marketing</Link></li>
                            <li><Link href="/services/web" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Web Development</Link></li>
                            <li><Link href="/services/app" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-primary">→</span> Mobile App Development</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-foreground">Get in Touch</h3>
                        <div className="space-y-6">
                            {/* Office Address */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#3BF4C7] flex items-center justify-center text-black flex-shrink-0">
                                    <MapPin size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-base">Office Address</h4>
                                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                        {data?.contactInfo?.location || 'Pragatinagar Marga, Sankhamul-31, Kathmandu, Nepal'}
                                    </p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <a href={`tel:${data?.contactInfo?.phone || '+977 974-5697694'}`} className="flex items-start space-x-4 group">
                                <div className="w-12 h-12 rounded-2xl bg-[#E8FBF6] flex items-center justify-center text-[#3BF4C7] group-hover:bg-[#3BF4C7] group-hover:text-black transition-all duration-300 flex-shrink-0">
                                    <Phone size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">Phone Number</h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        {data?.contactInfo?.phone || '+977 974-5697694'}
                                    </p>
                                </div>
                            </a>

                            {/* Working Hours */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#E8FBF6] flex items-center justify-center text-[#3BF4C7] flex-shrink-0">
                                    <Clock size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-base">Working Hours</h4>
                                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                        Sun - Fri: 10:00 AM - 6:00 PM<br />Sat: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                    <p>{data?.copyrightText || `© ${new Date().getFullYear()} Tecobit Marketing. All rights reserved.`}</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>

                {/* Scroll To Top Button */}
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:-translate-y-1 hover:shadow-xl ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                >
                    <ArrowRight className="-rotate-90" size={20} />
                </button>
            </div>
        </footer>
    );
}

