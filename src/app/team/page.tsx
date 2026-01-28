"use client";

import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
    const team = [
        {
            name: "Aarav Sharma",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
            bio: "Visionary leader with 10+ years in digital strategy."
        },
        {
            name: "Priya Adhikari",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
            bio: "Award-winning designer passionate about brand storytelling."
        },
        {
            name: "Rohan Gupta",
            role: "Head of Development",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
            bio: "Full-stack expert specializing in scalable web architectures."
        },
        {
            name: "Sita Khadka",
            role: "SEO Specialist",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
            bio: "Data-driven marketer who knows how to rank #1."
        },
    ];

    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Meet the <span className="text-tecobit-mint">Team</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The creative minds and technical wizards behind your digital success.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="flex space-x-4 text-white">
                                        <Linkedin size={20} className="hover:text-tecobit-mint cursor-pointer" />
                                        <Twitter size={20} className="hover:text-tecobit-mint cursor-pointer" />
                                        <Mail size={20} className="hover:text-tecobit-mint cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold uppercase">{member.name}</h3>
                            <p className="text-tecobit-mint font-bold text-sm tracking-widest uppercase mb-2">{member.role}</p>
                            <p className="text-muted-foreground text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
