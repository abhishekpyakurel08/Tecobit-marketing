"use client";

import { PageTransition } from "@/components/PageTransition";
import { ProjectCTA } from "@/components/ProjectCTA";
import { RippleButton } from "@/components/RippleButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Join the <span className="text-tecobit-mint">Movement</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We are always looking for passionate people to join our growing team.
                    </p>
                </div>

                <div className="container mx-auto px-6 mb-24 max-w-5xl">
                    <div className="space-y-6">
                        {[
                            { title: "Senior React Developer", type: "Full-time", location: "Kathmandu / Remote", dept: "Engineering" },
                            { title: "Digital Marketing Strategist", type: "Full-time", location: "Kathmandu", dept: "Marketing" },
                            { title: "UI/UX Designer", type: "Part-time", location: "Remote", dept: "Design" },
                        ].map((job, idx) => (
                            <div key={idx} className="bg-muted/10 border border-border p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between group hover:border-tecobit-mint transition-colors cursor-pointer">
                                <div className="mb-4 md:mb-0 text-center md:text-left">
                                    <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-tecobit-mint transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                                        <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-tecobit-mint" /> {job.dept}</span>
                                        <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-tecobit-mint" /> {job.type}</span>
                                        <span className="flex items-center"><CheckCircle2 size={16} className="mr-2 text-tecobit-mint" /> {job.location}</span>
                                    </div>
                                </div>
                                <RippleButton variant="outline" className="min-w-[150px]">
                                    Apply Now
                                </RippleButton>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="bg-tecobit-mint text-black py-20 px-6 mb-12">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-black uppercase mb-6">Why Work With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 bg-black/5 rounded-xl">
                                <h4 className="font-bold uppercase mb-2">Growth</h4>
                                <p className="text-sm">Continuous learning and paid certifications.</p>
                            </div>
                            <div className="p-6 bg-black/5 rounded-xl">
                                <h4 className="font-bold uppercase mb-2">Culture</h4>
                                <p className="text-sm">Fun, collaborative, and inclusive environment.</p>
                            </div>
                            <div className="p-6 bg-black/5 rounded-xl">
                                <h4 className="font-bold uppercase mb-2">Flexibility</h4>
                                <p className="text-sm">Hybrid work options and flexible hours.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
