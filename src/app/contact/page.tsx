"use client";

import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                        Get In <span className="text-tecobit-mint italic">Touch</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        Whether you have a critical scaling question, pricing inquiry, or need a high-performance demo, our architectural team is ready to respond.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    <div className="bg-muted/10 p-10 rounded-3xl border border-border text-center hover:border-tecobit-mint transition-all hover:scale-105 group">
                        <div className="w-16 h-16 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-8 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-all">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-4">Chat with us</h3>
                        <p className="text-muted-foreground text-lg font-bold">info@tecobit.com</p>
                    </div>
                    <div className="bg-muted/10 p-10 rounded-3xl border border-border text-center hover:border-tecobit-mint transition-all hover:scale-105 group">
                        <div className="w-16 h-16 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-8 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-all">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-4">Phone</h3>
                        <p className="text-muted-foreground text-lg font-bold">+977 9863992047</p>
                    </div>
                    <div className="bg-muted/10 p-10 rounded-3xl border border-border text-center hover:border-tecobit-mint transition-all hover:scale-105 group">
                        <div className="w-16 h-16 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-8 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-all">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-4">Office</h3>
                        <p className="text-muted-foreground text-lg font-bold">Kathmandu, Nepal</p>
                    </div>
                    <div className="bg-muted/10 p-10 rounded-3xl border border-border text-center hover:border-tecobit-mint transition-all hover:scale-105 group">
                        <div className="w-16 h-16 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-8 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-all">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-4">Hours</h3>
                        <p className="text-muted-foreground text-lg font-bold">Sun-Fri: 9am - 6pm</p>
                    </div>
                </div>

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
