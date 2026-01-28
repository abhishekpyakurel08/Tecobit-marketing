"use client";

import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Get In <span className="text-tecobit-mint">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a question about features, trials, pricing, or need a demo, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    <div className="bg-muted/10 p-8 rounded-2xl border border-border text-center hover:border-tecobit-mint transition-colors group">
                        <div className="w-12 h-12 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-colors">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold uppercase tracking-widest mb-2">Chat with us</h3>
                        <p className="text-muted-foreground text-sm">info@tecobit.com</p>
                    </div>
                    <div className="bg-muted/10 p-8 rounded-2xl border border-border text-center hover:border-tecobit-mint transition-colors group">
                        <div className="w-12 h-12 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-colors">
                            <Phone size={24} />
                        </div>
                        <h3 className="font-bold uppercase tracking-widest mb-2">Phone</h3>
                        <p className="text-muted-foreground text-sm">+977 9863992047</p>
                    </div>
                    <div className="bg-muted/10 p-8 rounded-2xl border border-border text-center hover:border-tecobit-mint transition-colors group">
                        <div className="w-12 h-12 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-colors">
                            <MapPin size={24} />
                        </div>
                        <h3 className="font-bold uppercase tracking-widest mb-2">Office</h3>
                        <p className="text-muted-foreground text-sm">Kathmandu, Nepal</p>
                    </div>
                    <div className="bg-muted/10 p-8 rounded-2xl border border-border text-center hover:border-tecobit-mint transition-colors group">
                        <div className="w-12 h-12 bg-tecobit-mint/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tecobit-mint group-hover:bg-tecobit-mint group-hover:text-black transition-colors">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold uppercase tracking-widest mb-2">Hours</h3>
                        <p className="text-muted-foreground text-sm">Sun-Fri: 9am - 6pm</p>
                    </div>
                </div>

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
